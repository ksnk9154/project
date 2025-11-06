export function TraditionalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            url('/images/background-gif.gif'),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.02) 2px,
              rgba(139, 69, 19, 0.02) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.02) 2px,
              rgba(139, 69, 19, 0.02) 4px
            )`,
          backgroundSize: 'cover, auto, auto',
          backgroundPosition: 'center center, 0 0, 0 0',
          backgroundRepeat: 'no-repeat, repeat, repeat',
          backgroundAttachment: 'fixed, scroll, scroll',
          backgroundColor: 'rgb(245,230,211)',
        }}
      ></div>

      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
    </div>
  );
}