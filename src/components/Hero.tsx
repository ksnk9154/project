export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle patterned background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#F5E6D3',
          backgroundImage: `repeating-linear-gradient(
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
        }}
      />
      
      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8 md:p-12 transition-all duration-500 hover:bg-white/20">
          {/* LEFT: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-amber-900 font-semibold drop-shadow-sm">
              Welcome to Hindu Digest
            </h1>

            <p className="text-lg md:text-xl text-amber-800 leading-relaxed max-w-xl">
              Discover the profound wisdom of Non-duality through the teachings of
              Dr. Aravind Rao
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                Explore Teachings
              </button>
              <button className="px-8 py-3 bg-transparent text-amber-900 border-2 border-orange-500 rounded-md hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/40">
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