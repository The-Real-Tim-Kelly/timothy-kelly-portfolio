import ProfileImage from './ProfileImage';
import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`min-h-screen flex flex-col justify-center items-center text-center pt-20 px-6 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-black via-gray-950 to-black'
          : 'bg-gradient-to-b from-white via-gray-50 to-gray-100'
      }`}
    >
      {/* Main Headline */}
      <h1
        className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        Tim Kelly
      </h1>

      {/* Subheadline */}
      <p
        className={`text-xl md:text-2xl font-semibold mb-8 ${
          isDark ? 'text-blue-400' : 'text-blue-600'
        }`}
      >
        Senior Software Engineer
      </p>

      <p
        className={`text-lg md:text-xl font-medium mb-8 ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        Building scalable, architected systems that stand the test of time
      </p>

      {/* Profile Image */}
      <ProfileImage />

      {/* Description Paragraph */}
      <p
        className={`mt-8 max-w-2xl text-base md:text-lg leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}
      >
        Specialized in designing high-performance distributed systems with a focus on clean
        architecture and maintainable code. I leverage modern patterns and technologies like
        C#, .NET, and AWS to build extensible solutions that scale with your ambitions.
      </p>

      {/* Action Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a
          href="https://github.com/The-Real-Tim-Kelly"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isDark
              ? 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
              : 'bg-white text-black border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          GitHub
        </a>

        <a
          href="#resume"
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isDark
              ? 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
              : 'bg-white text-black border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          Resume
        </a>

        <a
          href="https://linkedin.com/in/timothy-kelly-82b228170"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            isDark
              ? 'bg-gray-800 text-white border-2 border-gray-700 hover:bg-gray-700 hover:border-gray-600'
              : 'bg-white text-black border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          LinkedIn
        </a>
      </div>

      {/* Tech Stack Preview */}
      <div className="mt-16 flex gap-3 flex-wrap justify-center opacity-80">
        {['C#', '.NET', 'AWS', 'SQL', 'Distributed Systems'].map((tech) => (
          <span
            key={tech}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isDark
                ? 'bg-gray-800 text-gray-300'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
