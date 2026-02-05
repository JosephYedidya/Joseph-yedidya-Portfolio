import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Moon, Sun } from "lucide-react";

const themeColors = [
  { name: "Rouge", value: "351 85% 51%", hex: "#ec1839" },
  { name: "Orange", value: "24 95% 53%", hex: "#fa5b0f" },
  { name: "Vert", value: "156 60% 45%", hex: "#37b182" },
  { name: "Bleu", value: "214 75% 40%", hex: "#1854b4" },
  { name: "Rose", value: "316 96% 54%", hex: "#f021b2" },
];

const ColorSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeColor, setActiveColor] = useState(themeColors[0]);

  useEffect(() => {
    // Load saved preferences
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("themeColor");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    if (savedColor) {
      const color = themeColors.find((c) => c.hex === savedColor);
      if (color) {
        setActiveColor(color);
        applyColor(color.value);
      }
    }
  }, []);

  const applyColor = (colorValue: string) => {
    document.documentElement.style.setProperty("--primary", colorValue);
    document.documentElement.style.setProperty("--accent", colorValue);
    document.documentElement.style.setProperty("--ring", colorValue);
    document.documentElement.style.setProperty("--sidebar-primary", colorValue);
    document.documentElement.style.setProperty("--sidebar-ring", colorValue);
  };

  const handleColorChange = (color: typeof themeColors[0]) => {
    setActiveColor(color);
    applyColor(color.value);
    localStorage.setItem("themeColor", color.hex);
  };

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="fixed right-0 top-1/3 z-50">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-0 top-0 w-12 h-12 bg-card shadow-card rounded-l-xl flex items-center justify-center border border-r-0 border-border"
        style={{ transform: isOpen ? "translateX(-200px)" : "translateX(0)" }}
        aria-label="Ouvrir le sélecteur de couleur"
      >
        <Settings className="text-primary animate-spin" style={{ animationDuration: "3s" }} size={22} />
      </motion.button>

      {/* Day/Night Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleDarkMode}
        className="absolute right-0 top-14 w-12 h-12 bg-card shadow-card rounded-l-xl flex items-center justify-center border border-r-0 border-border"
        style={{ transform: isOpen ? "translateX(-200px)" : "translateX(0)" }}
        aria-label="Basculer le mode sombre"
      >
        {isDark ? (
          <Sun className="text-yellow-500" size={22} />
        ) : (
          <Moon className="text-primary" size={22} />
        )}
      </motion.button>

      {/* Color Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[200px] bg-card shadow-card-hover rounded-l-2xl p-5 border border-r-0 border-border"
          >
            <h4 className="text-sm font-semibold text-muted-foreground mb-4">
              Couleurs du Thème
            </h4>

            <div className="flex flex-wrap gap-3">
              {themeColors.map((color) => (
                <motion.button
                  key={color.name}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleColorChange(color)}
                  className={`w-9 h-9 rounded-full transition-all ${
                    activeColor.hex === color.hex
                      ? "ring-2 ring-offset-2 ring-offset-card"
                      : ""
                  }`}
                  style={{ 
                    backgroundColor: color.hex,
                    boxShadow: activeColor.hex === color.hex ? `0 0 0 2px ${color.hex}` : undefined,
                  }}
                  title={color.name}
                  aria-label={`Couleur ${color.name}`}
                />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border">
              <button
                onClick={toggleDarkMode}
                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm"
              >
                {isDark ? (
                  <>
                    <Sun size={18} className="text-yellow-500" />
                    <span>Mode Clair</span>
                  </>
                ) : (
                  <>
                    <Moon size={18} />
                    <span>Mode Sombre</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorSwitcher;
