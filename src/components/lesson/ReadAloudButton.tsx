"use client";
import { useEffect, useState } from "react";
export function ReadAloudButton({ textToSpeak }: { textToSpeak: string }) {
  const [speaking, setSpeaking] = useState(false);
  const [message, setMessage] = useState('');
  useEffect(() => () => { if ('speechSynthesis' in window) window.speechSynthesis.cancel(); }, []);
  function read() {
    if (!('speechSynthesis' in window)) { setMessage('Read-aloud is not supported by this browser.'); return; }
    window.speechSynthesis.cancel();
    if (speaking) { setSpeaking(false); return; }
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    speech.lang = 'en-US'; speech.rate = .95;
    speech.onend = () => setSpeaking(false);
    speech.onerror = () => { setSpeaking(false); setMessage('Audio could not play. Check your browser’s speech settings.'); };
    setMessage(''); setSpeaking(true); window.speechSynthesis.speak(speech);
  }
  return <div><button onClick={read} className="text-xs rounded-md border border-slate-300 px-3 py-1.5 text-slate-600">{speaking ? 'Stop reading' : 'Read aloud'}</button><p role="status" className="text-xs text-slate-500">{message}</p></div>;
}
