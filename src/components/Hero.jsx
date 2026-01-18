const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-260px] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-primary/25 blur-[160px]" />
        <div className="absolute bottom-[-300px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-[180px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/60 backdrop-blur">
            🚀 ИИ-автоматизация для малого и среднего бизнеса
          </div>

          {/* Heading */}
          <h1 className="mx-auto mb-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Больше заявок и клиентов
            <span className="block bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
              без увеличения штата
            </span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Внедряю ИИ и автоматизацию для обработки заявок, общения с клиентами
            и построения воронки продаж — чтобы бизнес рос
            <span className="text-white"> без ручной рутины</span>.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-9 py-4 text-lg font-medium text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(120,255,0,0.45)]"
            >
              Получить разбор воронки
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-9 py-4 text-lg text-white/80 backdrop-blur transition-all hover:border-primary/40 hover:text-white"
            >
              Посмотреть примеры решений
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-sm text-white/40">
            Бесплатная консультация · Без обязательств · Ответ в течение 24 часов
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
