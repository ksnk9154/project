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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-amber-900">
              Welcome to Hindu Digest
            </h1>
            
            <p className="text-lg md:text-xl text-amber-800 leading-relaxed">
              Discover the profound wisdom of Non-duality through the teachings of Dr. Aravind Rao
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                Explore Teachings
              </button>
              <button className="px-8 py-3 bg-transparent text-amber-900 border-2 border-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Ganesha Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src="/images/ganesh home screen.png"
                alt="Lord Ganesha"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}