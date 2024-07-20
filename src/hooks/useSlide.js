import { useState, useEffect } from "react";

function useSlide(
  testimonialsLength,
  autoTranslateEnabled = true,
  autoTranslateInterval = 5000
) {
  const [display, setDisplay] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [autoTranslateX, setAutoTranslateX] = useState(autoTranslateEnabled);

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e) {
    setEndX(e.changedTouches[0].clientX);
    handleSwipe();
  }

  function handleSwipe() {
    if (startX - endX > 50) {
      // swipe left, go to next image
      setDisplay((prev) => (prev + 1) % testimonialsLength);
    } else if (startX - endX < -50) {
      // swipe right, go to previous image
      setDisplay(
        (prev) => (prev - 1 + testimonialsLength) % testimonialsLength
      );
    }
    setAutoTranslateX(false);
  }

  function translate(index) {
    setDisplay(index);
    setAutoTranslateX(false);
  }

  function autoTranslate() {
    if (!autoTranslateX) return;
    setDisplay((prev) => (prev + 1) % testimonialsLength);
  }

  useEffect(() => {
    const interval = setInterval(autoTranslate, autoTranslateInterval);
    return () => clearInterval(interval);
  }, [autoTranslateX]);

  useEffect(() => {
    if (!autoTranslateX) {
      const timer = setTimeout(() => {
        setAutoTranslateX(true);
      }, 20000);
      return () => clearTimeout(timer);
    }
  }, [autoTranslateX]);

  return { display, handleTouchStart, handleTouchEnd, translate };
}

export default useSlide;
