import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Heart Failure Prediction",
    description:
      "Predicting the risk of heart failure to determine survival outcomes using machine learning algorithms.",
    image:
      "https://img.freepik.com/free-vector/high-cholesterol-blood-pressure-tiny-people-character-concept-vector-illustration_272375-2278.jpg",
    github: "#",
    demo: "#",
    tags: ["Python", "Machine learning", "Scikit-learn"],
  },
  {
    title: "Pratyaksha KYC Application",
    description:
      "Streamlining KYC verification with AI and OCR for secure, efficient, and seamless customer onboarding.",
    image:
      "https://img.freepik.com/free-vector/know-your-customer-concept-marketing-team-doing-research-collecting-client-surveys-analyzing-risks-business-group-using-laptops-documents-near-kyc-huge-letters_74855-13146.jpg",
    github: "https://github.com/Pratyaksha-KYC/KYC_Application",
    demo: "#",
    tags: ["Python", "React", "MongoDB"],
  },
  {
    title: "Cricket Data Analytics",
    description:
      "Analyzing T20 World Cup data to craft the ultimate cricket team for an intergalactic showdown.",
    image:
      "https://img.freepik.com/free-vector/gradient-ipl-cricket-illustration_23-2149205212.jpg",
    github: "https://github.com/ShrinathSontakke/Cricket-Data-Analytics",
    demo: "#",
    tags: ["Python", "Pandas", "Power BI"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex items-center space-x-2 text-white"
                    >
                      <Github className="h-5 w-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.demo}
                      className="flex items-center space-x-2 text-white"
                    >
                      {/* <Globe className="h-5 w-5" />
                      <span>Demo</span> */}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
