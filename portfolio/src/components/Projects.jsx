import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/hospital.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Hospital Management System</h3>
          <p>
A Hospital Management System built in C with CSV file handling, enabling efficient patient management, appointments, billing, and staff records. The system implements role-based access control to ensure data security and organized operations.
          </p>
          <div className="project-tech">
            <span>C</span>
            <span>File Handling</span>
            <a
    href="https://github.com/Akash-Raj9/Hospital-Management-System-Project"  // Replace with your GitHub repo URL
    target="_blank"
    rel="noopener noreferrer"
    className="project-tech-link"
    style={{
      padding: "0.3rem 0.8rem",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50px",
      fontSize: "0.8rem",
      color: "#38bdf8",
      border: "1px solid #38bdf8",
      textDecoration: "none",
      fontWeight: 500,
      marginLeft: "0.4rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      display: "inline-block",
    }}
  >
    GitHub
  </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Food.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Food Ordering Website</h3>
          <p>
A user-friendly Food Ordering Website built with the MERN stack, featuring secure authentication, menu browsing, cart management, order placement with address details, and an admin dashboard for managing orders and food items.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express.js</span>
             <a
      href="https://foodie-webapp-rho.vercel.app/" /* Replace with your actual deployed link */
      target="_blank"
      rel="noopener noreferrer"
      className="project-demo-tag"
      style={{
        padding: "0.3rem 0.8rem",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50px",
        fontSize: "0.8rem",
        color: "#38bdf8", /* Accent color, adjust as needed */
        border: "1px solid #38bdf8", /* Matches tech tag border style */
        marginLeft: "0.5rem",
        textDecoration: "none",
        display: "inline-block",
        fontWeight: 500,
        transition: "all 0.3s ease"
      }}
    >
      Live Demo
    </a>
      <a
    href="https://github.com/Akash-Raj9/FoodieWebapp"  // Replace with your GitHub repo URL
    target="_blank"
    rel="noopener noreferrer"
    className="project-tech-link"
    style={{
      padding: "0.3rem 0.8rem",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50px",
      fontSize: "0.8rem",
      color: "#38bdf8",
      border: "1px solid #38bdf8",
      textDecoration: "none",
      fontWeight: 500,
      marginLeft: "0.4rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      display: "inline-block",
    }}
  >
    GitHub
  </a>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/ai.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>AI Chatbot</h3>
          <p>
            An intelligent Artificial Intelligence Chatbot built with the MERN stack and OpenAI integration, offering real-time conversational assistance, context-aware responses, and seamless web deployment
          </p>
          <div className="project-tech">
            <span>OpenAI</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
                         <a
      href="https://foodie-webapp-rho.vercel.app/" /* Replace with your actual deployed link */
      target="_blank"
      rel="noopener noreferrer"
      className="project-demo-tag"
      style={{
        padding: "0.3rem 0.8rem",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "50px",
        fontSize: "0.8rem",
        color: "#38bdf8", /* Accent color, adjust as needed */
        border: "1px solid #38bdf8", /* Matches tech tag border style */
        marginLeft: "0.5rem",
        textDecoration: "none",
        display: "inline-block",
        fontWeight: 500,
        transition: "all 0.3s ease"
      }}
    >
      Live Demo
    </a>
      <a
    href="https://github.com/Akash-Raj9"  // Replace with your GitHub repo URL
    target="_blank"
    rel="noopener noreferrer"
    className="project-tech-link"
    style={{
      padding: "0.3rem 0.8rem",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "50px",
      fontSize: "0.8rem",
      color: "#38bdf8",
      border: "1px solid #38bdf8",
      textDecoration: "none",
      fontWeight: 500,
      marginLeft: "0.4rem",
      transition: "all 0.3s ease",
      cursor: "pointer",
      display: "inline-block",
    }}
  >
    GitHub
  </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
