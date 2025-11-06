export function TraditionalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main decorative background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/background-gif.gif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Subtle white overlay for readability */}
      <div className="absolute inset-0 bg-white/40"></div>
    </div>
  );
}