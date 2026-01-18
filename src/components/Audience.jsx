import { Store, Globe, Wrench, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

const segments = [
  {
    icon: Building2,
    title: "Малый бизнес",
    description:
      "Компании с небольшим штатом, которым важно расти без лишних затрат",
  },
  {
    icon: Globe,
    title: "Онлайн-проекты",
    description:
      "Онлайн-школы, стартапы и агентства с потоком заявок",
  },
  {
    icon: Wrench,
    title: "Сервисы и услуги",
    description:
      "Клиники, салоны, автосервисы и другие локальные бизнесы",
  },
  {
    icon: Store,
    title: "Без IT-отдела",
    description:
      "Бизнесу, которому нужны технологии без найма программистов",
  },
];

const Audience = () => {
  useCardsAnimation(".audience-card");

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
      {/* ===== Tech grid background (Audience) ===== */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="container relative z-10">
        <SectionHeader
          label="Для кого"
          title="Кому подходит"
          description="Подходит бизнесу, где важен измеримый результат"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.title}
              onMouseMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                audience-card
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
              {/* Interactive glow */}
              <div className="glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_10px_40px_rgba(120,255,0,0.25)]">
                  <segment.icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mb-2 text-xl font-semibold text-white">
                  {segment.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
