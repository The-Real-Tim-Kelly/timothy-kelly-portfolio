import { useTheme } from '../context/ThemeContext';

const pets = [
  {
    name: 'Luna',
    breed: 'Black Lab / Golden Retriever mix',
    image: 'luna.jpg',
    description:
      '"By your hip dog" - Luna LOVES to play fetch and always knows when you\'re feeling down. She makes an incredible effort to cheer you up. It\'s amazing how she just knows when you need that comfort.',
    traits: ['Loyal', 'Playful', 'Empathetic'],
  },
  {
    name: 'Miranda',
    breed: 'Great Pyrenese / Golden Retriever mix',
    image: 'miranda.jpg',
    description:
      "Independent with a mind of her own - very typical Great Pyrenese energy! While she loves to counter surf and has her own agenda, she's absolutely 100% a good dog and loves her family to no end.",
    traits: ['Independent', 'Loving', 'Spirited'],
  },
];

export default function PersonalLife() {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-24 px-6 transition-colors duration-300 ${
        isDark ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="max-w-6xl mx-auto">
      <h2
        className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}
      >
        Life Outside of Code
      </h2>

      <div className="mb-12">
        <h3
          className={`text-2xl font-semibold mb-6 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          Hobbies & Interests
        </h3>
        <p
          className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
        >
          When I'm not building systems, you can find me maintaining gaming
          servers locally, diving into casual gaming sessions with friends,
          or enjoying quality time with my pets. Outside of the digital world,
          I'm also passionate about yard work and keeping my space maintained to
          perfection.
        </p>
      </div>

      <div>
        <h3
          className={`text-2xl font-semibold mb-8 ${
            isDark ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          My Pets
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className={`overflow-hidden rounded-lg transition-colors duration-300 ${
                isDark ? 'bg-gray-900' : 'bg-gray-100'
              }`}
            >
              {/* Pet Image */}
              <div className="w-full h-64 bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Pet Info */}
              <div className="p-6">
                <h4
                  className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}
                >
                  {pet.name}
                </h4>
                <p
                  className={`text-sm font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  {pet.breed}
                </p>
                <p
                  className={`mb-4 leading-relaxed text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {pet.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pet.traits.map((trait) => (
                    <span
                      key={trait}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? 'bg-gray-800 text-gray-200'
                          : 'bg-blue-200 text-blue-900'
                      }`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
