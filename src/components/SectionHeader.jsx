const SectionHeader = ({ label, title, description }) => {
  return (
    <div className="relative mx-auto mb-16 max-w-3xl text-center">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 top-6 mx-auto h-24 w-64 rounded-full bg-primary/20 blur-[80px]" />

      {label && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-primary/40" />
          <span className="text-primary text-sm uppercase tracking-widest">
            {label}
          </span>
          <span className="h-px w-10 bg-primary/40" />
        </div>
      )}

      <h2 className="mb-5 text-4xl font-semibold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
