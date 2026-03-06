import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function DetailedExperience() {
  const { isDark } = useTheme();

  return (
    <div
      className={`py-24 px-6 max-w-4xl mx-auto transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <h2
        className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}
      >
        Work Experience
      </h2>

      <div className="space-y-12">
        {resumeData.experience.map((job) => (
          <div
            key={job.id}
            className={`border-l-4 pl-6 py-2 ${isDark ? 'border-gray-700' : 'border-blue-400'}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <div>
                <h3
                  className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}
                >
                  {job.title}
                </h3>
                <p
                  className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  {job.company}
                </p>
              </div>
              <p
                className={`text-sm font-semibold mt-2 md:mt-0 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
              >
                {job.startDate} — {job.endDate}
              </p>
            </div>
            <p
              className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              {job.location}
            </p>

            <div className="mb-6">
              <h4
                className={`text-sm font-semibold mb-3 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className={`flex gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <span
                      className={`flex-shrink-0 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                    >
                      •
                    </span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className={`text-sm font-semibold mb-3 uppercase tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded text-sm ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-blue-100 text-blue-900'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
