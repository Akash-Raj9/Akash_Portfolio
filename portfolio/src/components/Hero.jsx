import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import leetcodeLogo from '../assets/leetcode.png';

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋  Hello, Myself </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Akash Raj
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
          I am a Full Stack Developer focused on creating scalable, efficient, and visually engaging web applications. With expertise in both front-end and back-end development, I deliver seamless digital experiences that combine modern design with powerful functionality.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Akash-Raj9" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/akash-raj-6b3388284/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"> </i>
            </motion.a>


          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="code-display"
            initial={{ y: 0, boxShadow: "0 8px 36px rgba(0,0,0,0.24)" }}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 3, 0],  
              boxShadow: [
                "0 8px 36px rgba(0,0,0,0.24)",
                "0 16px 48px rgba(0,0,0,0.28)",
                "0 8px 36px rgba(0,0,0,0.24)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 64px rgba(50,50,120,0.35)",
              borderColor: "#7c3aed",
              rotate: 2,                // Slight tilt on hover
    cursor: "pointer"
            }}
            style={{
              borderRadius: "20px",
              border: "2px solid transparent",
              background: "rgba(30, 41, 59, 0.85)",
              backdropFilter: "blur(14px)",
              marginBottom: "50px",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                background: "transparent",
                borderRadius: "20px",
                height: "100%",
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "AkashRaj",
  origin: "💻 From India, building on the web",
  role: "Full Stack Developer",
  stack: {
    languages: ["JavaScript", "C++", "C","SQL"],
    frameworks: ["React", "Express.js"],
    Databases: ["MongoDB", "MYSQL"],
  },
  traits: [
    "clean-code enthusiast",
    "problem solver",
    "performance optimizer",
    "UI/UX admirer",
  ],
  missionStatement:
     "Crafting scalable web applications that blend elegant design 
     with robust functionality.",
  availability: "Open to opportunities",
};`}
            </SyntaxHighlighter>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
