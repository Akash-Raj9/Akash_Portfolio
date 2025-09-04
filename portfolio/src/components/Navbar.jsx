import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Define available themes here — keys correspond to CSS data-theme attributes
const themes = [
  { name: "Dark", key: "dark", icon: "🌙" },
  { name: "Light", key: "light", icon: "☀️" },
  { name: "Purple", key: "purple", icon: "🟣" },
  { name: "Ocean", key: "ocean", icon: "🌊" },

 
];

export const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  // Apply theme on page load and whenever it changes
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && themes.some(t => t.key === savedTheme)) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (e) => {
    setCurrentTheme(e.target.value);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       Akash_Raj_portfolio 
      </motion.div>

      {/* Theme selector dropdown */}
      <motion.div
        className="theme-selector"
        initial="initial"
        animate="animate"
        style={{ marginLeft: "auto", marginRight: "2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        <span style={{ fontSize: "1.5rem" }}>🎨</span> {/* Logo/icon */}
        <select
          value={currentTheme}
          onChange={handleThemeChange}
          style={{
            padding: "0.35rem 0.75rem",
            borderRadius: "5px",
            border: "1px solid var(--card-border)",
            background: "var(--card-bg)",
            color: "var(--text-color)",
            fontWeight: "600",
            cursor: "pointer",
          }}
          aria-label="Select Color Theme"
        >
          {themes.map(({ key, name, icon }) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home"> Home</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#skills"> Skills</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >

          <a href="#projects"> Projects</a>
        </motion.li>
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact"> Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
