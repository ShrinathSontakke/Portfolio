import Scene3D from './components/Scene3D';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gradient-to-br dark:from-gray-900 dark:to-black light:from-gray-50 light:to-white">
        <Scene3D />
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;