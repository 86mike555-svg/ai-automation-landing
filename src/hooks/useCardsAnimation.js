import { useEffect } from "react";

export const useCardsAnimation = (selector, options = {}) => {
  const {
    stagger = 120,
    rootMargin = "0px 0px -10% 0px",
  } = options;

  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin }
    );

    elements.forEach((el, index) => {
      el.style.setProperty("--delay", `${index * stagger}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector, stagger, rootMargin]);
};
