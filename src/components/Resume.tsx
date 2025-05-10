import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ResumePDF from "../../public/assets/Shrinath_Sontakke_Resume.pdf";

export default function Resume() {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Dynamatix Analytics Pvt Ltd",
      period: "2023 - 2024",
      description:
        "Built and optimized web apps with Python and Angular, leveraging AI/ML, Git, and CI/CD for seamless development and deployment.",
    },
    {
      title: "Software Developer Intern",
      company: "Aashman foundation",
      period: "2018 - 2020",
      description:
        "Developed Python applications and contributed to data-driven projects.",
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Vignan University",
      period: "2023 - 2025",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      school: "SRTMUN University",
      period: "2018 - 2022",
    },
  ];

  const skills = [
    "Python",
    "C/C++",
    "Java",
    "SQL",
    "PL/SQL",
    "MongoDB",
    "PostgreSQL",
    "Angular",
    "React",
    "Git",
    "Docker",
    "AI & Machine Learning",
    "CI/CD",
  ];

  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-center text-white">
              Resume
            </h2>
            <motion.a
              href={ResumePDF}
              download
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                theme === "dark"
                  ? "bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600"
                  : "bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600"
              } text-white font-semibold transition-all duration-300 transform hover:scale-105`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                theme === "dark" ? "bg-white/10" : "bg-white/90"
              } backdrop-blur-lg`}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-500" />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-6 border-l-2 border-blue-500"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                    <h4 className="font-bold">{exp.title}</h4>
                    <p className="text-sm text-gray-400">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div
                className={`p-6 rounded-xl ${
                  theme === "dark" ? "bg-white/10" : "bg-white/90"
                } backdrop-blur-lg`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-purple-500" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-6 border-l-2 border-purple-500"
                    >
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500" />
                      <h4 className="font-bold">{edu.degree}</h4>
                      <p className="text-sm text-gray-400">
                        {edu.school} | {edu.period}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  theme === "dark" ? "bg-white/10" : "bg-white/90"
                } backdrop-blur-lg`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-pink-500" />
                  <h3 className="text-2xl font-bold">Skills</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`px-4 py-2 rounded-full ${
                        theme === "dark"
                          ? "bg-white/20 hover:bg-white/30"
                          : "bg-gray-200 hover:bg-gray-300"
                      } transition-colors duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
