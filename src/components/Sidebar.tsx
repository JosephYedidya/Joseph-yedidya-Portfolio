import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Settings, 
  Briefcase, 
  Github, 
  Code, 
  MessageCircle, 
  Mail,
  Menu,
  X 
} from "lucide-react";
import { navItems } from "@/data/portfolioData";

const iconMap = {
  Home,
  User,
  Settings,
  Briefcase,
  Github,
  Code,
  MessageCircle,
  Mail,
};

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-primary text-primary-foreground rounded-lg shadow-elegant"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={isMobile ? { x: -280 } : { x: 0 }}
        animate={{ x: isMobile && !isOpen ? -280 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-[270px] bg-sidebar border-r border-sidebar-border z-40 flex flex-col"
      >
        {/* Logo */}
        <div className="p-8 text-center">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-5 py-4 border-2 border-primary rounded-lg transition-colors hover:bg-primary hover:text-primary-foreground group"
          >
            <span className="font-script text-5xl text-primary group-hover:text-primary-foreground transition-colors">
              J
            </span>
            <span className="text-2xl font-bold tracking-wider text-sidebar-foreground group-hover:text-primary-foreground transition-colors">
              oseph
            </span>
          </motion.a>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-5 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <motion.a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-4 px-5 py-3 rounded-lg font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-elegant"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
