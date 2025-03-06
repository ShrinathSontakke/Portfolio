import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const skills = {
  "Frontend Development": [
    {
      name: "React & React Native",
      level: 95,
      color: "from-cyan-500 to-blue-500",
    },
    { name: "Angular 2", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Next.js", level: 88, color: "from-indigo-500 to-purple-500" },
    {
      name: "Three.js & WebGL",
      level: 85,
      color: "from-purple-500 to-pink-500",
    },
  ],
  "Backend Development": [
    {
      name: "Python & Django",
      level: 92,
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "C & C++",
      level: 88,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Spring Boot & REST APIs",
      level: 80,
      color: "from-green-500 to-emerald-500",
    },
    { name: "Database Design", level: 85, color: "from-cyan-500 to-blue-500" },
  ],
  "DevOps & Tools": [
    {
      name: "AWS & Cloud Services",
      level: 85,
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Docker & Kubernetes",
      level: 82,
      color: "from-orange-500 to-red-500",
    },
    { name: "CI/CD Pipelines", level: 88, color: "from-red-500 to-pink-500" },
    {
      name: "System Architecture",
      level: 86,
      color: "from-pink-500 to-rose-500",
    },
  ],
};

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className={`relative group rounded-2xl p-6 ${
                  theme === "dark"
                    ? "bg-gray-900/50 backdrop-blur-lg"
                    : "bg-white/90 backdrop-blur-lg"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${items[0].color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <h3 className="text-xl font-bold mb-6 text-white relative z-10">
                  {category}
                </h3>
                <div className="space-y-6 relative z-10">
                  {items.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
