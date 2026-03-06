import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function Education() {
  const { isDark } = useTheme();

  return (
    <div
      className={`py-24 px-6 max-w-4xl mx-auto transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <h2
        className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}
      >
        Education
      </h2>

      <div className="space-y-8">
        {resumeData.education.map((edu, idx) => (
          <div key={idx} className={`border-l-4 border-blue-600 pl-6 py-2`}>
            <h3
              className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}
            >
              {edu.degree}
            </h3>
            <p
              className={`text-lg mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {edu.school}
            </p>
            <p
              className={`text-sm font-semibold mt-3 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
            >
              Graduated {edu.graduationYear}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
