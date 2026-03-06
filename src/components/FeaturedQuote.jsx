import { useTheme } from '../context/ThemeContext';

export default function FeaturedQuote() {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-gray-900 via-black to-gray-900'
          : 'bg-gradient-to-r from-blue-50 via-white to-blue-50'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="relative">
          <span
            className={`absolute top-0 left-0 text-6xl md:text-7xl font-serif leading-none transform -translate-x-4 -translate-y-4 ${
              isDark ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            "
          </span>

          <p
            className={`text-2xl md:text-3xl font-semibold leading-relaxed mb-8 px-12 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            If you never make mistakes then you are not on the frontier of discovery, for there
            is where mistakes are made all the time.
          </p>

          <span
            className={`absolute bottom-0 right-0 text-6xl md:text-7xl font-serif leading-none transform translate-x-4 translate-y-4 ${
              isDark ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            "
          </span>
          
          <footer
            className={`text-lg font-semibold pt-8 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            — Neil deGrasse Tyson
          </footer>
        </blockquote>

        <div
          className={`mt-12 h-1 w-16 mx-auto rounded-full ${
            isDark ? 'bg-blue-600' : 'bg-blue-500'
          }`}
        ></div>
      </div>
    </section>
  );
}
