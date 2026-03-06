import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { isDark } = useTheme();

  return (
    <div
      className={`py-24 px-6 max-w-4xl mx-auto transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'}`}
    >
      <h2
        className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}
      >
        About Me
      </h2>

      <div className="space-y-4">
        <p
          className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          I'm a Senior Software Engineer with experience building secure,
          scalable backend systems in financial services and defense
          environments. My work focuses on distributed systems, cloud
          infrastructure, and reliable APIs using C#, .NET, and AWS.
        </p>

        <p
          className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          In my free time, I dabble in front-end development using React and
          Tailwind CSS, exploring modern UI patterns and best practices. I'm
          always curious about the full spectrum of software development.
        </p>

        <p
          className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          I take my commitment to operational excellence seriously. My work
          phone is always with me, and I monitor production systems even when
          I'm off-call. I'm genuinely invested in catching issues early and
          providing expertise and support whenever the team needs it.
        </p>

        <p
          className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          Beyond the code, I'm passionate about gaming, maintaining local game
          servers, spending time with my pets, and yard work. I believe in
          maintaining a healthy balance between professional ambitions and
          personal interests.
        </p>
      </div>
    </div>
  );
}
