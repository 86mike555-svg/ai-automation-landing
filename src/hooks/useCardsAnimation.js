import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCardsAnimation = (selector) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(selector);
      if (!cards.length) return;

      // ⛔ СРАЗУ СКРЫВАЕМ КАРТОЧКИ
      gsap.set(cards, {
        opacity: 0,
        y: 80,
        scale: 0.95,
        filter: "blur(10px)",
      });

      // 🎬 АНИМАЦИЯ ПРИ СКРОЛЛЕ
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cards[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [selector]);
};
