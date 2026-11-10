"use client";
import { useEffect, useState } from "react";
export function StorageNotice() {
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => { const handle = () => setUnavailable(true); window.addEventListener('progress-storage-unavailable', handle); return () => window.removeEventListener('progress-storage-unavailable',handle); }, []);
  return unavailable ? <p role="alert" className="p-3 bg-amber-50 text-sm">Your browser could not save progress. You can continue this session, but progress may be lost when you close or reload the page.</p> : null;
}
