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
            style={{
              backgroundImage: "url('/projects/Food.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>FoodieWebapp – MERN Stack Food Ordering Website</h3>
          <p>
            A full-featured Food Ordering Website built with the MERN stack, offering secure authentication, dynamic menu browsing, and seamless order placements. Includes real-time order tracking, admin analytics for managing food items, users, and order.
          </p>

          <div className="project-tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Javascript</span>
            <span>MongoDB</span>
            <span>CSS3</span>
            <span>Express.js</span>
            <span>JWT</span>
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
                color: "#38bdf8" /* Accent color, adjust as needed */,
                border: "1px solid #38bdf8" /* Matches tech tag border style */,
                marginLeft: "0.5rem",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Akash-Raj9/FoodieWebapp" // Replace with your GitHub repo URL
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
              backgroundImage: "url('/projects/JobNexus.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <h3>JobNexus – MERN Stack Job Portal</h3>
          <p>
            A user-friendly job portal built with the MERN stack, featuring
            secure login/signup, job posting and browsing, application tracking,
            media uploads via Cloudinary, and a responsive UI styled with
            Tailwind CSS.
          </p>

          <div className="project-tech">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>Redux</span>
            <span>Node.js</span>
            <span>Javascript</span>
            <span>Cloudinary</span>
            <span>Tailwind CSS</span>

            <a
              href="https://job-nexus-pearl.vercel.app/" /* Replace with your actual deployed link */
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-tag"
              style={{
                padding: "0.3rem 0.8rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50px",
                fontSize: "0.8rem",
                color: "#38bdf8" /* Accent color, adjust as needed */,
                border: "1px solid #38bdf8" /* Matches tech tag border style */,
                marginLeft: "0.5rem",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Akash-Raj9/JobNexus" // Replace with your GitHub repo URL
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
              backgroundImage: "url('/projects/Skillify.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />

          <h3>Skillify – AI powered Resume Creator</h3>
          <p>
            An AI-driven resume builder built with the MERN stack, featuring secure authentication, smart resume generation, Preview resume, PDF download and a modern responsive UI styled with Tailwind CSS.
          </p>

          <div className="project-tech">
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>Redux</span>
            <span>Node.js</span>
            <span>ImageKit</span>
            <span>Tailwind CSS</span>
            <span>Gemini Model</span>

            <a
              href="https://skillify-ai-powered-resume-w5ac.vercel.app/" /* Replace with your actual deployed link */
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-tag"
              style={{
                padding: "0.3rem 0.8rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50px",
                fontSize: "0.8rem",
                color: "#38bdf8" /* Accent color, adjust as needed */,
                border: "1px solid #38bdf8" /* Matches tech tag border style */,
                marginLeft: "0.5rem",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Akash-Raj9/Skillify---AI-Powered-Resume" // Replace with your GitHub repo URL
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
            style={{ backgroundImage: "url('/projects/hospital.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Hospital Management System</h3>
          <p>
            {" "}
            A Hospital Management System built in C with CSV file handling,
            enabling efficient patient management, appointments, billing, and
            staff records. The system implements role-based access control to
            ensure data security and organized operations, along with features
            such as appointment scheduling for seamless healthcare service
            delivery.{" "}
          </p>
          <div className="project-tech">
            <span>C</span>
            <span>File Handling</span>
            <a
              href="https://github.com/Akash-Raj9/Hospital_management" // Replace with your GitHub repo URL
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
              backgroundImage: "url('/projects/hack.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>SynapHack — Mern stack Hackathon Management</h3>
          <p>
            A comprehensive Hackathon Management Platform built using the MERN stack. 
            It enables users to register, create and join hackathons, manage teams, track event schedules, 
            and receive real-time updates. Organizers can efficiently manage participants, 
            events, and results through a powerful admin dashboard.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>JWT</span>
            <a
              href="https://unstop-hput.vercel.app/" /* Replace with your actual deployed link */
              target="_blank"
              rel="noopener noreferrer"
              className="project-demo-tag"
              style={{
                padding: "0.3rem 0.8rem",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "50px",
                fontSize: "0.8rem",
                color: "#38bdf8" /* Accent color, adjust as needed */,
                border: "1px solid #38bdf8" /* Matches tech tag border style */,
                marginLeft: "0.5rem",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Akash-Raj9/unstop" // Replace with your GitHub repo URL
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
