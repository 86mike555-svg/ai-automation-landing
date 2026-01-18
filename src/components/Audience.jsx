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
      "Бизнес, который хочет технологии без найма программистов",
  },
];

const Audience = () => {
  return (
    <section id="audience" className="relative py-24 bg-transparent">
      <div className="container relative">
        <SectionHeader
          label="Для кого"
          title="Кому подходит"
          description="Работаю с бизнесом, которому нужен измеримый результат"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="
                audience-card
                card-edge-glow
                p-8
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_30px_80px_rgba(120,255,0,0.18)]
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <segment.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {segment.title}
              </h3>

              <p className="text-base text-white/70 text-center leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
