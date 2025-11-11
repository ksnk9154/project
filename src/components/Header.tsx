import { ShoppingCart } from "lucide-react";

interface HeaderProps {
  onBasketClick: () => void;
  basketCount: number;
}

export function Header({ onBasketClick, basketCount }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border-b-2 border-orange-400 shadow-md px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          {/* Hindu Digest Logo */}
          <div className="relative">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white">
              <img 
                src="/images/logo.png" 
                alt="Hindu Digest Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Website Name */}
          <div>
            <h1 className="text-2xl md:text-3xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent tracking-wide">
              Hindu Digest
            </h1>
            <p className="text-xs md:text-sm text-amber-700 italic hidden sm:block">
              Advaita Vedanta | Itihasa-Puranas | Sanatana Dharma
            </p>
          </div>
        </div>

        {/* Right side - Basket */}
        <div className="flex items-center gap-4">
          {/* Basket Icon */}
          <button
            onClick={onBasketClick}
            className="p-3 bg-white hover:bg-orange-50 rounded-full transition-colors relative shadow-md border-2 border-orange-300 hover:border-orange-400"
            aria-label="Shopping basket"
          >
            <ShoppingCart className="w-5 h-5 text-orange-600" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {basketCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
