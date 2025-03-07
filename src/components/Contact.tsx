import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState<string>("");
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  interface ApiResponse {
    success: boolean;
    message: string;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const payload = {
      access_key: "70a5979f-a203-4ac2-90af-11e61c4ea2ce",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: ApiResponse = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>

              <div className="flex space-x-4">
                {[
                  {
                    icon: <Github />,
                    href: "https://github.com/ShrinathSontakke",
                  },
                  {
                    icon: <Linkedin />,
                    href: "https://www.linkedin.com/in/shrinath-sontakke/",
                  },
                  { icon: <Twitter />, href: "https://x.com/SontakkeShri" },
                  { icon: <Mail />, href: "mailto:your.email@example.com" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                  required
                />
              </div>

              {result && <p className="text-white">{result}</p>}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
