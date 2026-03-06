import { useTheme } from '../context/ThemeContext';

export default function ProfileImage() {
  const { isDark } = useTheme();

  return (
    <div className="flex justify-center mt-8">
      <div
        className={`relative w-48 h-48 rounded-full overflow-hidden border-4 ${isDark ? 'border-blue-500 bg-gray-800' : 'border-blue-400 bg-gray-100'} shadow-2xl`}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect
            width="200"
            height="200"
            fill={isDark ? '#1f2937' : '#f3f4f6'}
          />

          {/* Gradient background for visual interest */}
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor={isDark ? '#3b82f6' : '#60a5fa'}
                stopOpacity="0.1"
              />
              <stop
                offset="100%"
                stopColor={isDark ? '#06b6d4' : '#22d3ee'}
                stopOpacity="0.1"
              />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill="url(#bgGradient)" />

          {/* Head */}
          <circle
            cx="100"
            cy="70"
            r="35"
            fill={isDark ? '#d1d5db' : '#9ca3af'}
          />

          {/* Hair */}
          <path
            d="M 65 70 Q 65 35 100 35 Q 135 35 135 70"
            fill={isDark ? '#6b7280' : '#4b5563'}
          />

          {/* Body/Shoulders */}
          <ellipse
            cx="100"
            cy="130"
            rx="45"
            ry="50"
            fill={isDark ? '#d1d5db' : '#9ca3af'}
          />

          {/* Shirt */}
          <rect
            x="70"
            y="115"
            width="60"
            height="45"
            fill={isDark ? '#3b82f6' : '#60a5fa'}
            rx="5"
          />

          {/* Code/Tech accent */}
          <text
            x="100"
            y="145"
            fontSize="16"
            fontFamily="monospace"
            fill={isDark ? '#fbbf24' : '#f59e0b'}
            textAnchor="middle"
            fontWeight="bold"
          >
            {'</>'}
          </text>

          {/* Decorative elements */}
          <circle
            cx="30"
            cy="40"
            r="8"
            fill={isDark ? '#06b6d4' : '#22d3ee'}
            opacity="0.6"
          />
          <circle
            cx="170"
            cy="50"
            r="6"
            fill={isDark ? '#8b5cf6' : '#a78bfa'}
            opacity="0.6"
          />
          <circle
            cx="25"
            cy="160"
            r="5"
            fill={isDark ? '#ec4899' : '#f472b6'}
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
