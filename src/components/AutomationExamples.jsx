// src/components/AutomationExamples.jsx
import React from "react";
import { MessageCircle, Zap, Bot, Clock, BarChart2, CheckSquare } from "lucide-react";
import SectionHeader from "./SectionHeader";

const examples = [
  {
    icon: MessageCircle,
    title: "Заявка → Telegram",
    result: "Никаких потерянных контактов",
    description:
      "Клиент оставил заявку — бот моментально отправляет её в Telegram команде. Менеджер отвечает быстрее, конверсия растёт.",
  },
  {
    icon: Bot,
    title: "Автоответ за 5 сек",
    result: "Меньше оттока",
    description:
      "Показываем клиенту подтверждение и полезную информацию сразу после оставления заявки — пока менеджер ещё не подключился.",
  },
  {
    icon: CheckSquare,
    title: "Квалификация ИИ",
    result: "Только тёплые лиды",
    description:
      "Бот задаёт ключевые вопросы, отсекая спам и дешёвые заявки — менеджер получает готовые горячие лиды.",
  },
  {
    icon: Clock,
    title: "Напоминания команде",
    result: "Никто не забывает",
    description:
      "Если заявке не уделили внимания — система напомнит менеджеру и руководителю, чтобы снизить потери.",
  },
  {
    icon: Zap,
    title: "Автоворонка после заявки",
    result: "Клиент «созревает» сам",
    description:
      "Последовательность сообщений, кейсы и ответы на возражения — помогает закрывать сделки без лишнего вмешательства.",
  },
  {
    icon: BarChart2,
    title: "Отчёты по заявкам",
    result: "Понимаешь, что работает",
    description:
      "Кто, откуда и почему — простая аналитика по лидам, которая показывает путь для роста.",
  },
];

const AutomationExamples = () => {
  return (
    <section id="examples" className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] py-28" style={{ backgroundImage: "radial-gradient(ellipse at 10% 10%, rgba(120,255,0,0.02) 0%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,1) 100%)" }}>
      {/* subtle pattern lines (SVG) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diag" width="32" height="32" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
              <line x1="0" y1="0" x2="0" y2="32" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <filter id="grain">
              <feTurbulence baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="saturate" values="0" />
              <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
            </filter>
          </defs>

          {/* diagonal thin lines */}
          <rect width="100%" height="100%" fill="url(#diag)" />

          {/* subtle noise layer */}
          <rect width="100%" height="100%" fill="transparent" filter="url(#grain)" opacity="0.06" />
        </svg>
      </div>

      {/* soft radial glows */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(120,255,0,0.08),transparent_60%)] blur-[90px]" />
        <div className="absolute right-[-140px] top-[40%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(120,255,0,0.06),transparent_70%)] blur-[110px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Примеры"
          title="Как это работает на практике"
          description="Простые сценарии, которые сокращают потери заявок и увеличивают конверсию — готовые кейсы, которые можно запустить быстро"
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <article
              key={ex.title}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(120,255,0,0.06)]"
            >
              {/* interactive inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 shadow-[0_10px_30px_rgba(120,255,0,0.06)]">
                  <ex.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">{ex.title}</h3>
                  <div className="mt-1 text-sm font-medium text-primary">{ex.result}</div>
                  <p className="mt-3 text-sm text-white/70">{ex.description}</p>
                </div>
              </div>

              {/* subtle footer line */}
              <div className="mt-6 border-t border-white/6 pt-4 text-xs text-white/40 flex items-center justify-between">
                <span>Готово к запуску</span>
                <span>От 1 дня настройки</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default AutomationExamples;
