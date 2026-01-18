// src/components/AutomationExamples.jsx
import {
  MessageCircle,
  Zap,
  Bot,
  Clock,
  BarChart2,
  CheckSquare,
} from "lucide-react";
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
      "Клиент получает подтверждение и полезную информацию сразу после заявки — пока менеджер подключается.",
  },
  {
    icon: CheckSquare,
    title: "Квалификация ИИ",
    result: "Только тёплые лиды",
    description:
      "Бот задаёт ключевые вопросы и отсеивает спам — менеджер получает готовые лиды.",
  },
  {
    icon: Clock,
    title: "Напоминания команде",
    result: "Никто не забывает",
    description:
      "Если заявке не уделили внимания — система напомнит менеджеру и руководителю.",
  },
  {
    icon: Zap,
    title: "Автоворонка",
    result: "Клиент созревает сам",
    description:
      "Цепочки сообщений и ответы на возражения помогают закрывать сделки без давления.",
  },
  {
    icon: BarChart2,
    title: "Простая аналитика",
    result: "Понимаешь, что работает",
    description:
      "Откуда приходят заявки и где они теряются — без сложных CRM.",
  },
];

const AutomationExamples = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* мягкий фон + лёгкий паттерн */}
      <div className="pointer-events-none absolute inset-0">
        {/* radial glow */}
        <div className="absolute left-[-200px] top-[-120px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-160px] top-[45%] h-[360px] w-[360px] rounded-full bg-primary/5 blur-[140px]" />

        {/* diagonal lines (cheap) */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)",
          }}
        />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Примеры"
          title="Как это работает на практике"
          description="Сценарии автоматизации, которые сокращают потери заявок и повышают конверсию"
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((ex) => (
            <article
              key={ex.title}
              className="
                rounded-2xl
                border border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20">
                  <ex.icon className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {ex.title}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-primary">
                    {ex.result}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {ex.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex justify-between text-xs text-white/40">
                <span>Готово к запуску</span>
                <span>1–3 дня</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default AutomationExamples;
