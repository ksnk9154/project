import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

interface MenuItem {
  label: string;
  id: string;
  children?: { label: string; id: string }[];
}

const menuItems: MenuItem[] = [
  { label: "Home", id: "home" },
  { label: "Dr. Karanam Aravinda Rao", id: "dr-aravinda-rao" },
  {
    label: "Hindu Digest",
    id: "hindu-digest",
    children: [
      { label: "About Hindu Digest", id: "about-hindu-digest" },
    ],
  },
  {
    label: "News",
    id: "news",
    children: [
      { label: "Videos", id: "videos" },
      { label: "Articles", id: "articles-main" },
      { label: "Writings by Dr. Aravinda Rao", id: "writings-dr-rao" },
      { label: "Teachings", id: "teachings" },
      { label: "Community Articles", id: "community-articles" },
      { label: "Talks & Interviews", id: "talks-interviews" },
    ],
  },
  { label: "Media Clips", id: "media-clips" },
  {
    label: "Shop",
    id: "shop",
    children: [
      { label: "Books", id: "books" },
      { label: "Audio", id: "audio" },
      { label: "Video", id: "video" },
    ],
  },
  { label: "Q&A", id: "qa" },
  { label: "Contact", id: "contact" },
];

export function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden lg:block bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-8">
        <ul className="flex items-center gap-1">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="relative group"
              onMouseEnter={() => item.children && setOpenDropdown(item.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    className={`px-4 py-4 flex items-center gap-1 transition-colors whitespace-nowrap ${
                      activeSection === item.id ||
                      item.children.some((child) => child.id === activeSection)
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {openDropdown === item.id && (
                    <ul className="absolute top-full left-0 bg-white shadow-lg min-w-[240px] py-2 z-50 border border-gray-200">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <button
                            onClick={() => {
                              onNavigate(child.id);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-4 py-2 transition-colors ${
                              activeSection === child.id
                                ? "bg-orange-500 text-white"
                                : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            }`}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-4 transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? "bg-orange-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
