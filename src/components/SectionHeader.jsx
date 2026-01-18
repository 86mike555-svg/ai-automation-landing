const SectionHeader = ({ label, title, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {label && (
        <div className="text-primary text-sm uppercase tracking-widest mb-4">
          {label}
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5">
        {title}
      </h2>

      {description && (
        <p className="text-lg md:text-xl text-white/70 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
