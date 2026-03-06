import { useTheme } from '../context/ThemeContext';

export default function CurrentExperiments() {
  const { isDark } = useTheme();

  const experiments = [
    {
      title: 'Local AI Agents (WSL)',
      description:
        'Exploring the capabilities of running large language models and AI agents locally using Windows Subsystem for Linux for privacy and control.',
      icon: '🤖',
    },
    {
      title: 'AI-Assisted Development',
      description:
        'Leveraging AI tools to accelerate development workflows, improve code quality, and explore new architectural patterns faster.',
      icon: '⚡',
    },
    {
      title: 'React + Tailwind',
      description:
        'Building modern, responsive frontends with React and Tailwind CSS. Currently crafting this portfolio as a practical exploration.',
      icon: '🎨',
    },
    {
      title: 'C# Architecture Libraries',
      description:
        'Designing reusable, extensible architecture libraries in C# that encapsulate patterns and principles for backend systems.',
      icon: '🏗️',
    },
    {
      title: 'Developer Tooling',
      description:
        'Building automation tools and CLI utilities that improve developer experience and reduce friction in common engineering workflows.',
      icon: '🛠️',
    },
    {
      title: 'System Design',
      description:
        'Deep diving into distributed systems, scalability patterns, and architectural decisions that enable building systems at scale.',
      icon: '📊',
    },
  ];

  return (
    <section
      id="experiments"
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Current Experiments
        </h2>

        {/* Intro Paragraph */}
        <p
          className={`text-lg md:text-xl leading-relaxed mb-12 max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Technology evolves constantly, and so do I. I'm passionate about exploring emerging
          tools, frameworks, and patterns that push the boundaries of what's possible in software
          engineering. These experiments fuel my growth and inform better architectural decisions.
        </p>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-lg border transition-all duration-300 group ${
                isDark
                  ? 'bg-black border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400/20'
              }`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {experiment.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                {experiment.title}
              </h3>

              {/* Description */}
              <p
                className={`leading-relaxed text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                }`}
              >
                {experiment.description}
              </p>

              {/* Subtle hover indicator */}
              <div
                className={`absolute top-0 right-0 w-1 h-0 bg-gradient-to-b ${
                  isDark ? 'from-blue-500 to-blue-600' : 'from-blue-500 to-blue-600'
                } transition-all duration-300 group-hover:h-full rounded-tr-lg rounded-br-lg`}
              ></div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className={`mt-16 p-6 rounded-lg border ${
            isDark
              ? 'bg-black border-gray-800'
              : 'bg-white border-gray-200'
          }`}
        >
          <p
            className={`text-center text-sm md:text-base ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            These experiments inform my engineering approach and keep me at the forefront of
            modern software development. Always learning, always building.
          </p>
        </div>
      </div>
    </section>
  );
}
