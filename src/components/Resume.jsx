import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function Resume() {
  const { isDark } = useTheme();
  const { personal, summary } = resumeData;

  return (
    <section
      className={`py-24 px-6 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
        <div>
          <h1
            className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}
          >
            {personal.fullName}
          </h1>
          <p
            className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {personal.title}
          </p>
          <p className={`mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
            {personal.location}
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col gap-2 text-right">
          <a
            href={`mailto:${personal.email}`}
            className={`transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            {personal.email}
          </a>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {personal.phone}
          </p>
          <a
            href={`https://${personal.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            {personal.linkedin}
          </a>
        </div>
      </div>

      <div
        className={`rounded-lg p-8 mb-12 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        <h2
          className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Professional Summary
        </h2>
        <p
          className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {summary}
        </p>
      </div>

      <div>
        <h2
          className={`text-xl font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Download Full Resume
        </h2>
        <a
          href="Timothy_D_Kelly_Resume.pdf"
          download
          className={`inline-flex items-center gap-2 px-6 py-3 rounded transition-colors duration-200 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-4-2m4 2l4-2"
            />
          </svg>
          Download PDF Resume
        </a>
      </div>
      </div>
    </section>
  );
}
