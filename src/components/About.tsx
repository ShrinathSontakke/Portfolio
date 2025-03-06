import { motion } from "framer-motion";
import { Rocket, Star, Zap, Trophy } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Shrinath from "../../public/assets/shrinath.png";

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 rounded-2xl ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-violet-600/20 to-blue-500/20"
                    : "bg-gradient-to-r from-blue-600/20 to-purple-500/20"
                } blur-xl transition-all duration-300 group-hover:blur-2xl`}
              />
              <img
                src={Shrinath}
                alt="Developer"
                className="rounded-2xl shadow-2xl relative z-10 transform transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </motion.div>

            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm a passionate Software Engineer with a deep love for
                  creating elegant solutions to complex problems. With expertise
                  in modern web technologies and a keen eye for design, I
                  transform ideas into reality.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  My journey in tech has been driven by curiosity and a constant
                  desire to learn. I specialize in building scalable
                  applications that make a real impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    icon: <Rocket className="w-6 h-6" />,
                    text: "Innovation Driven",
                    color: "from-pink-500 to-rose-500",
                  },
                  {
                    icon: <Star className="w-6 h-6" />,
                    text: "Quality Focused",
                    color: "from-yellow-500 to-amber-500",
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    text: "Fast Learner",
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: <Trophy className="w-6 h-6" />,
                    text: "Problem Solver",
                    color: "from-blue-500 to-indigo-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`relative group overflow-hidden rounded-xl bg-gradient-to-r ${item.color} p-[1px]`}
                  >
                    <div
                      className={`h-full w-full rounded-xl ${
                        theme === "dark" ? "bg-gray-900" : "bg-white"
                      } p-4`}
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.text}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
