import { useTheme } from '../context/ThemeContext';
import resumeData from '../data/resumeData';

export default function DetailedSkills() {
  const { isDark } = useTheme();
  const { technicalSkills } = resumeData;

  const skillCategories = [
    { label: 'Languages', skills: technicalSkills.languages },
    {
      label: 'Application Development',
      skills: technicalSkills.applicationDevelopment,
    },
    { label: 'Cloud & DevOps', skills: technicalSkills.cloudDevOps },
    { label: 'Databases', skills: technicalSkills.databases },
    { label: 'Architecture', skills: technicalSkills.architecture },
  ];

  return (
    <div
      className={`py-24 px-6 max-w-4xl mx-auto transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <h2
        className={`text-3xl font-bold mb-12 ${isDark ? 'text-white' : 'text-black'}`}
      >
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.label}
            className={`rounded-lg p-6 ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
          >
            <h3
              className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}
            >
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-2 rounded transition-colors duration-200 text-sm ${isDark ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-blue-200 text-blue-900 hover:bg-blue-300'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
