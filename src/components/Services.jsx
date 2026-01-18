import { Bot, BarChart3, Zap, Settings } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

const services = [
  {
    icon: Bot,
    title: "ИИ-ассистенты и чат-боты",
    description:
      "Автоматическое общение с клиентами 24/7: ответы, заказы, консультации",
  },
  {
    icon: Zap,
    title: "Автоматизация продаж",
    description:
      "Обработка заявок, квалификация лидов, рассылки и напоминания",
  },
  {
    icon: BarChart3,
    title: "Анализ данных",
    description:
      "Отчёты и прогнозы для принятия решений, а не просто цифры",
  },
  {
    icon: Settings,
    title: "Оптимизация процессов",
    description:
      "Убираем рутину и освобождаем время команды",
  },
];

const Services = () => {
  useCardsAnimation(".service-card");

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x =
      (e.clientX ?? e.touches?.[0].clientX) - rect.left;
    const y =
      (e.clientY ?? e.touches?.[0].clientY) - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  const resetGlow = (e) => {
    e.currentTarget.style.setProperty("--x", `50%`);
    e.currentTarget.style.setProperty("--y", `50%`);
  };

  return (
    <section id="services" className="relative py-24 bg-transparent">
      <div className="container relative">
        <SectionHeader
          label="Услуги"
          title="Чем я занимаюсь"
          description="Внедряю ИИ-решения под задачи и бюджет малого бизнеса"
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                service-card
                card-edge-glow
                relative
                cursor-pointer
                p-10
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-primary/40
              "
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl glow-layer" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .glow-layer {
          background: radial-gradient(
            300px circle at var(--x, 50%) var(--y, 50%),
            rgba(120,255,0,0.22),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .service-card:hover .glow-layer {
          opacity: 1;
        }

        @media (hover: none) {
          .glow-layer {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
