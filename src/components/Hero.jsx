const Hero = () => {
  return (
    <section className="relative pt-32 pb-28 bg-transparent overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,255,0,0.08),transparent_60%)]" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-base text-white/60">
            ИИ-автоматизация для малого и среднего бизнеса
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8">
            Больше заявок и клиентов
            <br />
            <span className="text-primary">без увеличения штата</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed">
            Внедряю ИИ и автоматизацию для обработки заявок,
            общения с клиентами и воронки продаж —<br />
            чтобы бизнес рос без ручной рутины.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="px-9 py-4 rounded-xl bg-primary text-black font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(120,255,0,0.35)]"
            >
              Получить разбор воронки
            </a>

            <a
              href="#services"
              className="px-9 py-4 rounded-xl border border-white/20 text-white/70 transition-all hover:border-primary/40 hover:text-white"
            >
              Посмотреть примеры решений
            </a>
          </div>

          <p className="mt-10 text-base text-white/50">
            Мгновенный прорыв в продажах
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
