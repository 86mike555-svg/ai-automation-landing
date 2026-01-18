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
    <section className="relative py-24 bg-transparent">
      <div className="container relative">
        <SectionHeader
          label="Проблемы"
          title="Что мешает бизнесу расти"
          description="Если узнали себя хотя бы в одном пункте — решение есть"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pains.map((item, index) => (
            <div
              key={index}
              className="
                pain-card
                card-edge-glow
                p-8
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                transition-all duration-300
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_25px_70px_rgba(120,255,0,0.18)]
              "
            >
              {/* ИКОНКА — ВИЗУАЛЬНО БОЛЬШЕ */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-primary/20
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-[0_0_0_1px_rgba(120,255,0,0.25),0_12px_40px_rgba(120,255,0,0.25)]
                "
              >
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              <p className="text-white/80 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
