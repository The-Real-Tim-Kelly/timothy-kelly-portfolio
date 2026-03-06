import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Personal', href: '#personal' },
    { label: 'Resume', href: '#resume' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
        isDark
          ? 'bg-black bg-opacity-90 border-gray-800'
          : 'bg-white bg-opacity-90 border-gray-200'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className={`text-2xl font-bold hover:opacity-70 transition-opacity duration-200 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          TK
        </a>

        <div className="flex gap-8 overflow-x-auto items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition-colors duration-200 whitespace-nowrap ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`ml-4 p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414zM3 11a1 1 0 100-2H2a1 1 0 100 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
