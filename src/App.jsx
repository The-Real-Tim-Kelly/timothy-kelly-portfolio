import { useTheme } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedQuote from './components/FeaturedQuote';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import CurrentExperiments from './components/CurrentExperiments';
import DetailedExperience from './components/DetailedExperience';
import DetailedSkills from './components/DetailedSkills';
import Education from './components/Education';
import PersonalLife from './components/PersonalLife';
import Resume from './components/Resume';
import Navigation from './components/Navigation';

function App() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'bg-black text-white' : 'bg-white text-black'}>
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <FeaturedQuote />
      <EngineeringPhilosophy />
      <CurrentExperiments />
      <section id="experience">
        <DetailedExperience />
      </section>
      <section id="skills">
        <DetailedSkills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="personal">
        <PersonalLife />
      </section>
      <section id="resume">
        <Resume />
      </section>
    </div>
  );
}

export default App;
