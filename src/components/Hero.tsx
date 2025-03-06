import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Code2, Mail, Github, Linkedin, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Coding from "../../public/assets/Coding.json";

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      },
    }}
  >
    {children}
  </motion.div>
);
function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GradientButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <MagneticButton>
      <motion.a
        href={href}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-blue-500 to-purple-500"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <div className="absolute inset-[2px] rounded-full bg-black backdrop-blur-xl" />
        <div className="relative flex items-center space-x-2 rounded-full px-6 py-3 text-sm font-medium">
          <span className="relative z-10 flex items-center justify-center w-5 h-5">
            {icon}
          </span>
          <span className="relative z-10">{label}</span>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-gradient-to-r from-violet-600 via-blue-500 to-purple-500 transition-opacity duration-500" />
        </div>
      </motion.a>
    </MagneticButton>
  );
}

export default function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[rgb(10, 10, 10)]"
          : "bg-gradient-to-br from-blue-50 to-indigo-50"
      }`}
    >
      {/* Theme Toggle */}
      <AnimatePresence mode="wait">
        <motion.button
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          onClick={toggleTheme}
          className={`fixed top-24 right-6 p-3 rounded-full ${
            theme === "dark"
              ? "bg-white/10 hover:bg-white/20"
              : "bg-gray-100 hover:bg-gray-200"
          } transition-colors duration-300 z-50`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "dark" ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-800" />
          )}
        </motion.button>
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* ------------------------------------------------------------ Left Content -------------------------------------------------------*/}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-6xl sm:text-7xl lg:text-8xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I am
                  <motion.span
                    className={`block ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Shrinath
                  </motion.span>
                  <motion.span
                    className={`block bg-clip-text text-transparent ${
                      theme === "dark"
                        ? "inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-blue-500 to-purple-500 animate-gradient"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Software Developer
                  </motion.span>
                </motion.h1>
                <motion.p
                  className={`text-xl ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } max-w-2xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Software Developer with 1.5+ years of experience specializing
                  in backend development, API design, and database optimization.
                </motion.p>
              </div>

              {/* -------------------------------------------------------------------------------------------------------------------- */}

              <div className="text-center relative">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-violet-600/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  {/* animation */}
                  <div className="flex flex-wrap justify-center gap-6">
                    {[
                      { icon: <Code2 />, label: "Projects", href: "#projects" },
                      {
                        icon: <Github />,
                        label: "GitHub",
                        href: "https://github.com/ShrinathSontakke",
                      },
                      {
                        icon: <Linkedin />,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/shrinath-sontakke/",
                      },
                      { icon: <Mail />, label: "Contact", href: "#contact" },
                    ].map((item) => (
                      <GradientButton
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* -------------------------------------------------------------------------------------------------------------------- */}
            </motion.div>

            {/* Right Profile Image */}
            <FloatingElement delay={0.2}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Lottie animationData={Coding} />
                {/* <img
                  src="/your-profile-photo.jpg"
                  alt="Shrinath Sontakke"
                  className="relative z-10 w-full rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
                /> */}
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </div>
    </div>
  );
}
