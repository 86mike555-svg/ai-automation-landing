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
    <section id="process" className="relative py-28 bg-transparent">
      <div className="container relative">
        <SectionHeader
          label="Как проходит работа"
          title="Этапы внедрения"
          description="Простой и прозрачный процесс без лишних шагов"
        />

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_25px_70px_rgba(120,255,0,0.15)] animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute top-6 right-6 text-sm font-mono text-white/30">
                0{index + 1}
              </div>

              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-lg text-white/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
