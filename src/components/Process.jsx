import { Search, Settings, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

const steps = [
  {
    icon: Search,
    title: "Разбор задачи",
    description:
      "Понимаем, где автоматизация даст максимальный эффект",
  },
  {
    icon: Settings,
    title: "Внедрение решения",
    description:
      "Настраиваю ИИ и интеграции под реальные процессы бизнеса",
  },
  {
    icon: Rocket,
    title: "Запуск и рост",
    description:
      "Тестируем, оптимизируем и масштабируем решение",
  },
];

const Process = () => {
  useCardsAnimation(".process-card");

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
      {/* ===== Soft diagonal lines (Process) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="processLines"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="64"
                stroke="rgba(120,255,0,0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#processLines)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Как проходит работа"
          title="Этапы внедрения"
          description="Простой и прозрачный процесс без лишних шагов"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                process-card
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
            >
              <div className="glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_10px_40px_rgba(120,255,0,0.25)]">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
