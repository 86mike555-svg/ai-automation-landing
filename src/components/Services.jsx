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
    <section id="services" className="relative overflow-hidden bg-black py-28">
      {/* Top fade — плавный вход из предыдущего блока */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-transparent to-black" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Услуги"
          title="Чем я занимаюсь"
          description="Внедряю ИИ-решения под задачи и бюджет малого бизнеса"
        />

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                service-card
                group
                relative
                cursor-pointer
                rounded-3xl
                border border-white/10
                bg-white/5
                p-10
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_30px_90px_rgba(120,255,0,0.18)]
              "
            >
              {/* Interactive glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_0_0_1px_rgba(120,255,0,0.25),0_14px_50px_rgba(120,255,0,0.25)]">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-lg leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade — подготовка к следующему блоку */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />

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
