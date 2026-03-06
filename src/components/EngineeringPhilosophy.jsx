import { useTheme } from '../context/ThemeContext';

export default function EngineeringPhilosophy() {
  const { isDark } = useTheme();

  const philosophyItems = [
    {
      title: 'Open/Closed Principle',
      description:
        'Systems should be open for extension but closed for modification. This enables adding new features without altering existing, tested code.',
    },
    {
      title: 'Strategy Pattern',
      description:
        'Encapsulate algorithms into interchangeable strategies, allowing runtime selection without conditional logic scattered throughout the codebase.',
    },
    {
      title: 'Dependency Injection',
      description:
        'Invert control by injecting dependencies rather than creating them internally. This reduces coupling and makes systems more flexible and testable.',
    },
    {
      title: 'Testable Architecture',
      description:
        'Design systems with testing in mind from day one. Loose coupling, clear interfaces, and layered architecture make comprehensive testing straightforward.',
    },
    {
      title: 'Clean Code',
      description:
        'Write self-documenting code with clear intent. Meaningful names, small focused methods, and minimal complexity make code maintainable for years.',
    },
    {
      title: 'Pragmatic Engineering',
      description:
        'Balance architecture with pragmatism. Over-engineering is as harmful as under-engineering—know when the abstraction pays for itself.',
    },
  ];

  const codeExample = `public interface IStrategy<TInput, TOutput>
{
    int Key { get; }
    TOutput Execute(TInput input);
}`;

  return (
    <section
      id="philosophy"
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          How I Design Software
        </h2>

        {/* Intro Paragraph */}
        <p
          className={`text-lg md:text-xl leading-relaxed mb-12 max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          My approach to software engineering is rooted in building systems that are maintainable,
          extensible, and testable. By adhering to solid design principles, I create codebases
          that stand the test of time and adapt gracefully to changing requirements. Good
          architecture isn't about complexity—it's about clarity and purpose.
        </p>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border transition-all duration-200 ${
                isDark
                  ? 'bg-gray-900 border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10'
                  : 'bg-gray-50 border-gray-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-400/10'
              }`}
            >
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-700'
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Code Example Section */}
        <div>
          <h3
            className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Core Abstraction
          </h3>
          <p
            className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            The strategy pattern forms the backbone of extensible systems I design. This simple
            interface enables powerful runtime behavior selection without conditional complexity.
          </p>

          {/* Code Block */}
          <div
            className={`rounded-lg border p-6 overflow-x-auto ${
              isDark
                ? 'bg-gray-900 border-gray-800'
                : 'bg-gray-100 border-gray-300'
            }`}
          >
            <pre
              className={`font-mono text-sm leading-relaxed ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}
            >
              <code>{codeExample}</code>
            </pre>
          </div>

          <p
            className={`mt-6 text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            This interface encapsulates behavior, allowing concrete strategies to be swapped at
            runtime based on context, enabling the Open/Closed Principle in practice.
          </p>
        </div>
      </div>
    </section>
  );
}
