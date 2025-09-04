import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Skills = () => {
  const skills = [
    {
      title: "Programming Languages & Core Skills",
      items: ["JavaScript", "C++", "C", "SQL"],
    },
    {
      title: "Frameworks and Libraries",
      items: ["React", "Node.js", "Express", "Redux"],
    },
    {
      title: "Databases, Tools & Platforms",
      items: ["MongoDB", "MySQL", "Git/GitHub", "Postman" ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2 variants={fadeInUp} className="section-title">
        My Skills
      </motion.h2>
      <motion.div className="skills-container">
        {skills.map(({ title, items }) => (
          <motion.div
            key={title}
            className="skill-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{title}</h3>
            <div className="skill-tags">
              {items.map(skill => (
                <div className="skill-tag" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
