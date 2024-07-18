import { useEffect } from "react";

export const useIntersectionObserver = (selector, classNameToAdd) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classNameToAdd);
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [selector, classNameToAdd]);
};

export default useIntersectionObserver;
