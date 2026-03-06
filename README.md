# Timothy Kelly's Portfolio

A modern, responsive personal portfolio website showcasing professional experience, technical skills, education, and personal interests. Built with **React**, **Vite**, and **Tailwind CSS**, with automated deployment to GitHub Pages.

**Live Site:** https://the-real-tim-kelly.github.io/timothy-kelly-portfolio/

## Features

- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching for comfortable viewing
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS
- 📄 **PDF Resume Download** - Direct download of full resume
- 🔗 **Social Links** - Quick access to GitHub and LinkedIn profiles
- 🐕 **Personal Section** - Dedicated space for hobbies and personal life (featuring Luna and Miranda!)
- 🚀 **CI/CD Ready** - Automated GitHub Actions deployment pipeline

## Project Structure

```
timothy-kelly-portfolio/
├── public/                           # Static assets
│   ├── favicon.svg                  # Custom portfolio icon
│   ├── luna.jpg                     # Pet photos
│   ├── miranda.jpg
│   └── Timothy_D_Kelly_Resume.pdf   # Resume file
├── src/
│   ├── components/                  # React components
│   │   ├── About.jsx               # About section
│   │   ├── DetailedExperience.jsx  # Work experience details
│   │   ├── DetailedSkills.jsx      # Technical skills breakdown
│   │   ├── Education.jsx           # Education history
│   │   ├── Hero.jsx                # Hero/intro section
│   │   ├── Navigation.jsx          # Header navigation
│   │   ├── PersonalLife.jsx        # Personal interests section
│   │   ├── ProfileImage.jsx        # Profile picture component
│   │   └── Resume.jsx              # Resume section
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark/Light mode context
│   ├── data/
│   │   └── resumeData.js           # Professional data (experience, skills, education)
│   ├── App.jsx                     # Main app component
│   ├── App.css                     # Global styles
│   ├── index.css                   # Base styles
│   └── main.jsx                    # React entry point
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions deployment config
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
└── eslint.config.js                # ESLint configuration
```

## Tech Stack

### Frontend

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **JavaScript (ES2020+)** - Modern JavaScript

### Development

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment

- **GitHub Pages** - Hosting platform
- **GitHub Actions** - CI/CD pipeline for automated builds and deployments

## Getting Started

### Prerequisites

- Node.js 22+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/The-Real-Tim-Kelly/timothy-kelly-portfolio.git
   cd timothy-kelly-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

The deployment workflow:

1. Checks out the code
2. Installs Node.js 22
3. Installs dependencies
4. Builds the project
5. Deploys to GitHub Pages

**Deployed at:** https://the-real-tim-kelly.github.io/timothy-kelly-portfolio/

## Configuration

### Vite Base URL

The `vite.config.js` is configured with `base: '/timothy-kelly-portfolio/'` to properly resolve assets when deployed to a GitHub Pages subdirectory.

### Theme Customization

Colors and theme settings can be modified in `tailwind.config.js`. The `ThemeContext` manages light/dark mode state across the application.

## Content Management

Professional data (experience, skills, education) is stored in `src/data/resumeData.js`. To update portfolio content:

1. Edit `src/data/resumeData.js` for professional information
2. Edit individual component files in `src/components/` for layout changes
3. Update images in the `public/` directory
4. Commit and push changes to trigger automatic deployment

## Performance

- **Code Splitting** - Vite automatically handles code splitting for optimal load times
- **Image Optimization** - Consider using WebP format for newer images
- **CSS Optimization** - Tailwind CSS purges unused styles in production builds
- **Fast Refresh** - Instant updates during development with Vite's HMR

## Browser Support

Supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is open source and available under the MIT License.

## Contact

**Timothy Kelly**

- GitHub: https://github.com/The-Real-Tim-Kelly
- LinkedIn: https://linkedin.com/in/timothy-kelly-82b228170
- Email: tkelly1996@yahoo.com

---

**Last Updated:** March 2026 | Built with ♥️ using React & Vite
