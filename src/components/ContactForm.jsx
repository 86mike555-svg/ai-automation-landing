const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phone = e.target.phone.value;
    const telegram = e.target.telegram.value;
    const email = e.target.email.value;
    const vk = e.target.vk.value;

    const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TG_CHAT_ID;

    const message = `
📩 Новая заявка с сайта

📞 Телефон: ${phone}
💬 Telegram: ${telegram || "не указан"}
📧 Email: ${email || "не указан"}
🔗 VK: ${vk || "не указан"}
    `;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    alert("Заявка отправлена!");
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* ===== Tech grid (очень мягкий) ===== */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />

      {/* ===== Диагонали (еле заметно, финальный акцент) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern
              id="contactLines"
              width="72"
              height="72"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="72"
                stroke="rgba(120,255,0,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactLines)" />
        </svg>
      </div>

      {/* ===== Мягкие неравномерные свечения ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* левый верх */}
        <div className="
          absolute left-[-240px] top-[6%]
          h-[640px] w-[640px] rounded-full
          bg-[radial-gradient(circle,rgba(120,255,0,0.20),transparent_70%)]
          blur-[140px]
        " />

        {/* правый центр */}
        <div className="
          absolute right-[-260px] top-[46%]
          h-[560px] w-[560px] rounded-full
          bg-[radial-gradient(circle,rgba(120,255,0,0.18),transparent_72%)]
          blur-[160px]
        " />

        {/* нижний якорь */}
        <div className="
          absolute left-1/2 bottom-[-320px]
          h-[820px] w-[820px] -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle,rgba(120,255,0,0.14),transparent_75%)]
          blur-[190px]
        " />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-6 text-4xl font-semibold text-white md:text-5xl">
            Бесплатный разбор бизнеса
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-white/70">
            Покажу, где вы теряете заявки и как автоматизация может это исправить
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              relative
              space-y-5
              rounded-3xl
              border border-white/12
              bg-white/6
              p-8
              backdrop-blur-xl
              shadow-[0_0_0_1px_rgba(120,255,0,0.08),0_45px_130px_rgba(0,0,0,0.55)]
            "
          >
            <input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              required
              className="w-full rounded-xl bg-black/45 px-4 py-3 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="text"
              name="telegram"
              placeholder="Telegram (необязательно)"
              className="w-full rounded-xl bg-black/45 px-4 py-3 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="email"
              name="email"
              placeholder="Email (необязательно)"
              className="w-full rounded-xl bg-black/45 px-4 py-3 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="text"
              name="vk"
              placeholder="VK (необязательно)"
              className="w-full rounded-xl bg-black/45 px-4 py-3 text-white placeholder:text-white/40 border border-white/10 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-primary
                py-4
                font-medium
                text-black
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_25px_90px_rgba(120,255,0,0.5)]
                active:scale-[0.98]
              "
            >
              Получить разбор
            </button>

            <p className="mt-2 text-sm text-white/50">
              Ответ придёт в ближайшее время · Без спама
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
