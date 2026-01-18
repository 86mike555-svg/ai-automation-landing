import { Bot, BarChart3, Zap, Settings } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

const services = [
  {
    icon: Bot,
    title: "ИИ-ассистенты и чат-боты",
    description:
      "Отвечают клиентам 24/7, принимают заявки и снимают нагрузку с менеджеров уже с первого дня",
  },
  {
    icon: Zap,
    title: "Автоматизация продаж",
    description:
      "Заявки обрабатываются быстрее, лиды квалифицируются автоматически, а клиенты не теряются",
  },
  {
    icon: BarChart3,
    title: "Понимание данных, а не цифр",
    description:
      "Показываю, откуда приходят заявки, где они теряются и что реально влияет на продажи",
  },
  {
    icon: Settings,
    title: "Оптимизация процессов",
    description:
      "Убираем ручную рутину и хаос в коммуникациях, освобождая время команды и владельца",
  },
];

const Services = () => {
  useCardsAnimation(".service-card");

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
    <section
      id="services"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* ===== Diagonal lines (Services) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="servicesLines"
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
          <rect width="100%" height="100%" fill="url(#servicesLines)" />
        </svg>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Услуги"
          title="Что вы получаете в итоге"
          description="Не просто технологии — а конкретный результат для бизнеса"
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
                animate-card
                card-with-glow
                card-edge-glow
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
              <div className="glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_14px_50px_rgba(120,255,0,0.25)]">
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
    </section>
  );
};

export default Services;
