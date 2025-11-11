import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
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
  { label: "Dr. Aravinda Rao Karanam", id: "dr-aravinda-rao" },
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
      // { label: "Writings by Dr. Aravinda Rao", id: "writings-dr-rao" },
      { label: "Teachings", id: "teachings" },
      { label: "Talks & Interviews", id: "talks-interviews" },
    ],
  },
  {
    label: "Shop",
    id: "shop",
    children: [
      { label: "Books", id: "books" },
    ],
  },
  { label: "Contact Us", id: "contact" },
];

export function MobileNav({ onNavigate, activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden bg-gray-800 border-b border-gray-700">
      <div className="px-4 py-3 flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-white hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white"
          >
            <nav className="py-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleExpanded(item.id)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        <span>{item.label}</span>
                        {expandedItems.has(item.id) ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {expandedItems.has(item.id) && (
                        <div className="bg-gray-50">
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleNavigate(child.id)}
                              className={`w-full text-left px-8 py-2 transition-colors ${
                                activeSection === child.id
                                  ? "bg-orange-500 text-white"
                                  : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                              }`}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNavigate(item.id)}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        activeSection === item.id
                          ? "bg-orange-500 text-white"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}