import {
  AlertTriangle,
  Clock,
  MessageCircle,
  TrendingDown,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useCardsAnimation } from "../hooks/useCardsAnimation";

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
  useCardsAnimation(".pain-card");

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
    e.currentTarget.style.setProperty("--x", "50%");
    e.currentTarget.style.setProperty("--y", "50%");
  };

  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* ===== Diagonal lines background (как в Hero) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="painLines"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="48"
                stroke="rgba(120,255,0,0.10)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#painLines)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Проблемы"
          title="Что мешает бизнесу расти"
          description="Типичные точки потери клиентов и денег"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((item, index) => (
            <div
              key={index}
              onMouseMove={handleMove}
              onTouchMove={handleMove}
              onMouseLeave={resetGlow}
              className="
                pain-card
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
                hover:border-primary/40
              "
            >
              {/* Interactive glow */}
              <div className="glow-layer" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_10px_40px_rgba(120,255,0,0.25)]">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>

                <p className="text-white/80 leading-relaxed">
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

export default PainPoints;
