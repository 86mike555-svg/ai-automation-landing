import { Search, Settings, Rocket } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    icon: Search,
    title: "Разбор задачи",
    description:
      "Созваниваемся и разбираем бизнес, чтобы понять, где ИИ даст максимальный эффект",
  },
  {
    icon: Settings,
    title: "Внедрение решения",
    description:
      "Настраиваю ИИ, автоматизацию и интеграции под ваши процессы",
  },
  {
    icon: Rocket,
    title: "Запуск и рост",
    description:
      "Тестируем, оптимизируем и масштабируем решение вместе с бизнесом",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative overflow-hidden bg-black py-28">
      {/* Top fade */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-t from-transparent to-black" />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <div className="container relative z-10">
        <SectionHeader
          label="Как проходит работа"
          title="Этапы внедрения"
          description="Простой и прозрачный процесс без лишних шагов"
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="
                group
                relative
                rounded-3xl
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-primary/40
                hover:shadow-[0_30px_90px_rgba(120,255,0,0.18)]
                animate-fade-up
              "
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number */}
              <div className="absolute right-6 top-6 text-sm font-mono text-white/30">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 shadow-[0_0_0_1px_rgba(120,255,0,0.25),0_14px_50px_rgba(120,255,0,0.25)] transition group-hover:scale-110">
                <step.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-lg leading-relaxed text-white/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Process;
