import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BugSquashGame() {
  const { isDark } = useTheme();
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [activeBugs, setActiveBugs] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [squashedId, setSquashedId] = useState(null);
  const [highScore, setHighScore] = useState(0);
  const [isNewHighScore, setIsNewHighScore] = useState(false);
  const gameContainerRef = useRef(null);
  const bugIdRef = useRef(0);
  const spawnIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);

  // Start game
  const startGame = () => {
    setScore(0);
    setTimeRemaining(30);
    setActiveBugs([]);
    setGameRunning(true);
    setGameEnded(false);
    bugIdRef.current = 0;
  };

  // Timer effect
  useEffect(() => {
    if (!gameRunning) return;

    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setGameRunning(false);
          setGameEnded(true);
          clearInterval(timerIntervalRef.current);
          clearInterval(spawnIntervalRef.current);
          setActiveBugs([]);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerIntervalRef.current);
  }, [gameRunning]);

  // Bug spawning effect
  useEffect(() => {
    if (!gameRunning) return;

    const spawnBug = () => {
      const isGold = Math.random() < 0.1; // 10% chance for gold bug
      const newBug = {
        id: bugIdRef.current++,
        x: Math.random() * 85,
        y: Math.random() * 80,
        type: isGold ? 'gold' : 'normal',
      };
      setActiveBugs((prev) => [...prev, newBug]);
    };

    // First bug spawns immediately
    spawnBug();

    // Subsequent bugs spawn at random intervals, faster in final 10 seconds
    const spawnInterval = timeRemaining <= 10 
      ? 400 + Math.random() * 200  // Faster in final 10 seconds
      : 700 + Math.random() * 300;

    spawnIntervalRef.current = setInterval(() => {
      spawnBug();
    }, spawnInterval);

    return () => clearInterval(spawnIntervalRef.current);
  }, [gameRunning, timeRemaining]);

  // Load high score from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bugSquashHighScore');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  // Save final score and update high score when game ends
  useEffect(() => {
    if (gameEnded) {
      setFinalScore(score);
      if (score > highScore) {
        setHighScore(score);
        setIsNewHighScore(true);
        localStorage.setItem('bugSquashHighScore', score.toString());
      } else {
        setIsNewHighScore(false);
      }
    }
  }, [gameEnded, score, highScore]);

  // Handle bug click
  const squashBug = (bugId, bugType) => {
    setSquashedId(bugId);
    setTimeout(() => {
      setActiveBugs((prev) => prev.filter((bug) => bug.id !== bugId));
      setSquashedId(null);
    }, 150);
    const points = bugType === 'gold' ? 5 : 1;
    setScore((prev) => prev + points);
  };

  return (
    <section
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            🐞 Debugging Challenge
          </h2>
          <p
            className={`text-lg md:text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Think you can squash bugs faster than they appear?
          </p>
        </div>

        {/* Game Container */}
        <div
          className={`rounded-lg border-2 overflow-hidden ${
            isDark
              ? 'bg-gray-900 border-gray-800'
              : 'bg-gray-50 border-gray-300'
          }`}
        >
          {/* Scoreboard */}
          <div
            className={`p-6 border-b-2 flex items-center justify-between ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
            }`}
          >
            <div className="flex gap-8">
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Score
                </p>
                <p
                  className={`text-3xl font-bold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {score}
                </p>
              </div>
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Time
                </p>
                <p
                  className={`text-3xl font-bold ${
                    timeRemaining <= 5 && gameRunning
                      ? 'text-red-500'
                      : isDark
                      ? 'text-gray-300'
                      : 'text-gray-700'
                  }`}
                >
                  {timeRemaining}s
                </p>
              </div>
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Personal Best
                </p>
                <p
                  className={`text-3xl font-bold ${
                    isDark ? 'text-green-400' : 'text-green-600'
                  }`}
                >
                  {highScore}
                </p>
              </div>
            </div>

            {/* Start/Stop Button */}
            {!gameRunning && !gameEnded && (
              <button
                onClick={startGame}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                Start Debugging
              </button>
            )}
            {gameEnded && (
              <button
                onClick={startGame}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  isDark
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'
                }`}
              >
                Play Again
              </button>
            )}
          </div>

          {/* Game Area */}
          {!gameEnded ? (
            <div
              ref={gameContainerRef}
              className={`relative h-96 ${isDark ? 'bg-black' : 'bg-white'}`}
            >
              {/* Bugs */}
              {activeBugs.map((bug) => (
                <button
                  key={bug.id}
                  onClick={() => squashBug(bug.id, bug.type)}
                  className={`absolute w-12 h-12 flex items-center justify-center text-4xl cursor-pointer transition-all duration-75 hover:scale-125 active:scale-75 ${
                    bug.type === 'gold' ? 'drop-shadow-lg' : ''
                  }`}
                  style={{
                    left: `${bug.x}%`,
                    top: `${bug.y}%`,
                    animation: squashedId === bug.id 
                      ? 'squash 0.15s ease-in forwards' 
                      : 'pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  title={bug.type === 'gold' ? '+5 points' : '+1 point'}
                >
                  {bug.type === 'gold' ? (
                    <span className="text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">
                      🐞
                    </span>
                  ) : (
                    <span>🐞</span>
                  )}
                </button>
              ))}

              {/* Game Ready State */}
              {!gameRunning && activeBugs.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p
                    className={`text-lg font-semibold ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    Click "Start Debugging" to begin
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Final Score Screen */
            <div
              className={`h-96 flex flex-col items-center justify-center gap-6 ${
                isDark ? 'bg-black' : 'bg-white'
              }`}
            >
              {isNewHighScore && (
                <div
                  className={`px-6 py-3 rounded-lg mb-4 text-lg font-bold text-center ${
                    isDark
                      ? 'bg-yellow-500 bg-opacity-20 text-yellow-300'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  🎉 New Personal Best! 🎉
                </div>
              )}
              <h3
                className={`text-3xl md:text-4xl font-bold ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Debug Session Complete
              </h3>
              <p
                className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                You squashed{' '}
                <span
                  className={`font-bold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {finalScore}
                </span>{' '}
                {finalScore === 1 ? 'bug' : 'bugs'}.
              </p>
              <p
                className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {isNewHighScore ? 'You beat your previous record!' : `Personal Best: ${highScore}`}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes pop {
          0% {
            transform: scale(0) rotate(-10deg);
            opacity: 0;
          }
          70% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes squash {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.6) scaleY(0.8);
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
