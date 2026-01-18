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
      className="relative py-28 bg-transparent overflow-hidden"
    >
      {/* 🌿 АСИММЕТРИЧНОЕ EDGE-СВЕЧЕНИЕ */}
      <div className="pointer-events-none absolute inset-0">
        {/* левый — выше */}
        <div className="
          absolute
          left-[-220px]
          top-[30%]
          w-[520px]
          h-[520px]
          bg-[radial-gradient(circle,rgba(120,255,0,0.12),transparent_72%)]
        " />

        {/* правый — ниже */}
        <div className="
          absolute
          right-[-220px]
          top-[65%]
          w-[520px]
          h-[520px]
          bg-[radial-gradient(circle,rgba(120,255,0,0.10),transparent_72%)]
        " />
      </div>

      <div className="container relative">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Бесплатный разбор бизнеса
          </h2>

          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Покажу, где вы теряете заявки и как ИИ может это исправить
          </p>

          <form
            onSubmit={handleSubmit}
            className="
              relative
              space-y-5
              rounded-3xl
              p-8
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-[0_0_0_1px_rgba(120,255,0,0.07),0_30px_90px_rgba(0,0,0,0.45)]
            "
          >
            <input
              type="tel"
              name="phone"
              placeholder="Телефон *"
              required
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="text"
              name="telegram"
              placeholder="Telegram (необязательно)"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="email"
              name="email"
              placeholder="Email (необязательно)"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <input
              type="text"
              name="vk"
              placeholder="VK (необязательно)"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
            />

            <button
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-primary
                text-black
                font-medium
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_20px_70px_rgba(120,255,0,0.45)]
                active:scale-[0.98]
              "
            >
              Получить разбор
            </button>

            <p className="text-sm text-white/50 mt-2">
              Ответ вам придет в ближайшее время
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
