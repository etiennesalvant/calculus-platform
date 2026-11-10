import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const root = process.cwd();
const cache = new Map();
const storage = new Map();
let failStorage = false;
const browser = { localStorage: {getItem:k=>storage.get(k)??null,setItem:(k,v)=>{if(failStorage)throw Error('blocked');storage.set(k,v);}}, dispatchEvent:()=>{} };
function load(name, parent = path.join(root,'src')) {
  const filename = (name.startsWith('@/') ? path.join(root,'src',name.slice(2)) : path.resolve(parent,name)).replace(/\.ts$/, '')+'.ts';
  if(cache.has(filename))return cache.get(filename).exports;
  const module = {exports:{}};cache.set(filename,module);
  const js = ts.transpileModule(fs.readFileSync(filename,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
  vm.runInNewContext(`(function(require,module,exports){${js}\n})`,{console,window:browser,Date,Event})(n=>load(n,path.dirname(filename)),module,module.exports);
  return module.exports;
}
const {courseCatalog} = load('@/lib/curriculum/courseCatalog');
const {gradeAnswer} = load('@/lib/assessment/gradeAnswer');
const {evaluateMathExpressionAtX:evaluate} = load('@/lib/animation/safeMathExpressionEvaluator');
const progress = load('@/lib/progress/studentProgressStore');
let lessons = 0, questions = 0, quizzes = 0;
const urls = new Set();
for(const c of courseCatalog){
  assert(c.units.length);
  for(const u of c.units){
    assert(u.lessons.length);
    for(const l of u.lessons){
      const url = `${c.courseSlug}/${u.unitSlug}/${l.lessonSlug}`;
      assert(!urls.has(url),`Duplicate lesson ${url}`);urls.add(url);lessons++;
      assert(l.contentBlocks.length && l.learningGoals.length);
      const ids = new Set();
      for(const q of l.practiceProblems){assert(!ids.has(q.problemId),q.problemId);ids.add(q.problemId);check(q);}
    }
    assert(u.unitQuiz?.questions.length);quizzes++;
    u.unitQuiz.questions.forEach(check);
  }
  assert(c.courseExam?.questions.length);c.courseExam.questions.forEach(check);
}
function check(q){
  questions++;assert(q.promptText && q.stepByStepExplanation);
  assert(gradeAnswer(q,q.correctAnswer),`Rejected own answer: ${q.problemId}`);
  assert(!gradeAnswer(q,''));
  if(q.answerFormat === 'multipleChoice')assert(q.choices.includes(q.correctAnswer),`Missing choice: ${q.problemId}`);
}
assert.equal(evaluate('-2^2',0),-4);
assert.equal(evaluate('2^-2',0),.25);
assert.equal(evaluate('2^3^2',0),512);
assert.equal(evaluate('2 3',0),null);
assert.equal(evaluate('1..2',0),null);
assert.equal(evaluate('1/0',0),null);
assert.equal(evaluate('x^2',3),9);
const numeric = {answerFormat:'shortNumericAnswer',correctAnswer:'1/2'};
assert(gradeAnswer(numeric,'2/4'));assert(gradeAnswer(numeric,'0.5'));assert(!gradeAnswer(numeric,'0.6'));assert(!gradeAnswer(numeric,'x+0.5'));
const l=courseCatalog[0].units[0].lessons[0];
const record={courseSlug:courseCatalog[0].courseSlug,unitSlug:courseCatalog[0].units[0].unitSlug,lessonSlug:l.lessonSlug,completedAtIsoDate:new Date().toISOString(),practiceProblemsCorrect:1,practiceProblemsTotal:2};
progress.recordLessonCompleted(record);progress.recordLessonCompleted(record);
assert.equal(progress.loadStudentProgress().completedLessons.length,1);
progress.recordStudyMinutesForToday(15);assert.equal(progress.loadStudentProgress().studyDays[0].minutesStudied,15);
assert.equal(progress.calculateCurrentStudyStreakInDays(progress.loadStudentProgress()),1);
progress.setDailyStudyGoal(60);assert.equal(progress.loadStudentProgress().dailyStudyGoalMinutes,60);
storage.set('calculusPlatformStudentProgress','{"completedLessons":null}');assert.equal(progress.loadStudentProgress().completedLessons.length,0);
storage.clear();failStorage=true;progress.setDailyStudyGoal(30);assert.equal(progress.loadStudentProgress().dailyStudyGoalMinutes,30);
console.log(`PASS: ${courseCatalog.length} courses, ${lessons} lessons, ${quizzes} quizzes, ${questions} questions; grading, parser and progress regressions.`);
