import ProfileImage from './ProfileImage';
import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section
      id="hero"
      className={`min-h-screen flex flex-col justify-center items-center text-center pt-20 px-6 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-gray-50'
      }`}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Timothy Kelly</h1>

      <p
        className={`text-2xl font-semibold mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
      >
        Senior Software Engineer
      </p>

      <ProfileImage />

      <p
        className={`mt-8 max-w-2xl text-base md:text-lg leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        {resumeData.summary}
      </p>

      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        <a
          href="https://linkedin.com/in/timothy-kelly-82b228170"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded font-semibold transition-colors duration-200 ${
            isDark
              ? 'bg-white text-black hover:bg-gray-200'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 py-3 rounded font-semibold transition-colors duration-200 ${
            isDark
              ? 'border-2 border-white text-white hover:bg-white hover:text-black'
              : 'border-2 border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
