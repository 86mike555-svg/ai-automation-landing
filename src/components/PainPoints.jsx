import {
  AlertTriangle,
  Clock,
  MessageCircle,
  TrendingDown,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const pains = [
  {
    icon: MessageCircle,
    text: "Заявки приходят, но часть клиентов теряется без ответа",
  },
  {
    icon: Clock,
    text: "Менеджеры не успевают обрабатывать входящие обращения",
  },
  {
    icon: TrendingDown,
    text: "Реклама дорожает, а конверсия не растёт",
  },
  {
    icon: AlertTriangle,
    text: "Процессы завязаны на людях и плохо масштабируются",
  },
];

const PainPoints = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Top background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Проблемы"
          title="Что мешает бизнесу расти"
          description="Типичные точки потери клиентов и денег — с которыми сталкивается большинство компаний"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((item, index) => (
            <div
              key={index}
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
              <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 shadow-[0_0_0_1px_rgba(120,255,0,0.25),0_14px_50px_rgba(120,255,0,0.25)]">
                <item.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Text */}
              <p className="relative z-10 text-base leading-relaxed text-white/80">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade — убирает резкую границу со следующим блоком */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default PainPoints;
