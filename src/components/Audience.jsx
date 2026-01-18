import { Store, Globe, Wrench, Building2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

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
      "Интернет-магазины, онлайн-школы, digital-агентства, стартапы",
  },
  {
    icon: Wrench,
    title: "Сервисы и услуги",
    description:
      "Салоны, клиники, автосервисы, юридические и бухгалтерские услуги",
  },
  {
    icon: Store,
    title: "Без IT-отдела",
    description:
      "Бизнес, которому нужны технологии без найма программистов",
  },
];

const Audience = () => {
  return (
    <section id="audience" className="relative overflow-hidden bg-black py-28">
      {/* Top background fade — плавный переход от прошлого блока */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-transparent to-black" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/2 top-[-160px] h-[480px] w-[480px] translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Для кого"
          title="Кому подходит"
          description="Работаю с бизнесом, которому важен конкретный, измеримый результат"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="
                group
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_30px_90px_rgba(120,255,0,0.18)]
              "
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl" />
              </div>

              {/* Icon */}
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 shadow-[0_0_0_1px_rgba(120,255,0,0.25),0_14px_50px_rgba(120,255,0,0.25)]">
                <segment.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 mb-3 text-center text-xl font-semibold text-white">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-center text-base leading-relaxed text-white/70">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade — подготовка к следующему блоку */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Audience;
