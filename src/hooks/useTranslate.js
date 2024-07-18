// mansion/src/hooks/useTranslate.js
import { useState, useEffect } from "react";

export function useTranslate(numberSections) {
  const [display, setDisplay] = useState(0);

  function autoTranslate() {
    setDisplay((prev) => (prev + 1) % numberSections);
  }

  useEffect(() => {
    const interval = setInterval(autoTranslate, 5000);
    return () => clearInterval(interval);
  }, [numberSections]);

  return { display, autoTranslate };
}
