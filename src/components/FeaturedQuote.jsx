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
        <svg className="w-12 h-12 mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-2.5-7-2.5m0 18c-6 0-7-1-7-8V5c0-1.25 2-2.5 7-2.5" />
        </svg>
        
        <blockquote>
          <p
            className={`text-2xl md:text-3xl font-semibold leading-relaxed mb-8 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            If you never make mistakes then you are not on the frontier of discovery, for there
            is where mistakes are made all the time.
          </p>
          
          <footer
            className={`text-lg font-semibold ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            — Neil deGrasse Tyson
          </footer>
        </blockquote>

        <div
          className={`mt-8 h-1 w-16 mx-auto rounded-full ${
            isDark ? 'bg-blue-600' : 'bg-blue-500'
          }`}
        ></div>
      </div>
    </section>
  );
}
