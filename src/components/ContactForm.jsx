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
      {/* 🌿 МЯГКИЕ НЕРАВНОМЕРНЫЕ СВЕЧЕНИЯ */}
      <div className="pointer-events-none absolute inset-0">
        {/* левый верх — главный акцент */}
        <div
          className="
            absolute
            left-[-240px]
            top-[8%]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[radial-gradient(circle,rgba(120,255,0,0.22),transparent_68%)]
            blur-[130px]
          "
        />

        {/* правый центр — поддержка */}
        <div
          className="
            absolute
            right-[-220px]
            top-[48%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[radial-gradient(circle,rgba(120,255,0,0.18),transparent_70%)]
            blur-[150px]
          "
        />

        {/* нижний центр — мягкий под форму */}
        <div
          className="
            absolute
            left-1/2
            bottom-[-280px]
            h-[760px]
            w-[760px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(circle,rgba(120,255,0,0.14),transparent_72%)]
            blur-[180px]
          "
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-md text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-semibold text-white">
            Бесплатный разбор бизнеса
          </h2>

          <p className="mb-12 text-lg leading-relaxed text-white/70">
            Покажу, где вы теряете заявки и как ИИ может это исправить
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              relative
              space-y-5
              rounded-3xl
              p-8
              bg-white/6
              backdrop-blur-xl
              border border-white/12
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
              Ответ вам придёт в ближайшее время
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
