import { Target, Lightbulb, ShieldCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

const aboutItems = [
  {
    icon: Lightbulb,
    title: "Идея проекта",
    text: "Leado появился из простой проблемы: заявки есть, но часть клиентов теряется из-за ручной обработки, задержек и хаоса в коммуникациях.",
  },
  {
    icon: Target,
    title: "Наш подход",
    text: "Мы строим автоматизацию вокруг реальных процессов бизнеса — без сложных CRM, долгих внедрений и лишних функций.",
  },
  {
    icon: ShieldCheck,
    title: "Честный старт",
    text: "Проект развивается. Мы не используем вымышленные кейсы, а делаем упор на результат, прозрачность и обратную связь от клиентов.",
  },
];

const About = () => {
  useCardsAnimation(".about-card");

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0].clientX) - rect.left;
    const y = (e.clientY ?? e.touches?.[0].clientY) - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const resetGlow = (e) => {
    e.currentTarget.style.setProperty("--x", "50%");
    e.currentTarget.style.setProperty("--y", "50%");
  };

  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Tech grid */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-25" />

      {/* Diagonal lines */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="aboutLines"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="56"
                stroke="rgba(120,255,0,0.10)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutLines)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="О проекте"
          title="Почему появился Leado"
          description="Практичный подход к автоматизации заявок и продаж"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              onMouseMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                about-card
                animate-card
                card-with-glow
                card-edge-glow
                group
                relative
                cursor-pointer
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
              style={{ "--delay": `${index * 120}ms` }}
            >
              <div className="glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_10px_40px_rgba(120,255,0,0.25)]">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
