export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
    <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border-2 border-orange-300/50 shadow-xl p-8 md:p-12 bg-white/60 backdrop-blur-sm">
          {/* LEFT: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-semibold drop-shadow-sm">
              Welcome to Hindu Digest
            </h1>

            <p className="text-lg md:text-xl text-black leading-relaxed max-w-xl">
              Discover the profound wisdom of Non-duality through the teachings of
              Dr. Aravind Rao
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Explore Teachings
              </button>
              <button className="px-8 py-3 bg-transparent text-black border-2 border-orange-500 rounded-md hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
              <img
                src="/images/ganesh home screen.png"
                alt="Lord Ganesha"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}