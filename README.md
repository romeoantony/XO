# 🎮 XO Game - Modern Tic-Tac-Toe

A beautiful, modern implementation of the classic XO (Tic-Tac-Toe) game built with React and Vite. Features stunning visuals, smooth animations, and a premium user experience.

![XO Game](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

- 🎨 **Stunning Design** - Modern UI with vibrant gradients and glassmorphism effects
- ✨ **Smooth Animations** - Fluid transitions and micro-interactions
- 📊 **Score Tracking** - Keep track of wins, losses, and draws
- 🎯 **Win Detection** - Automatic winner detection with visual highlights
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 🌙 **Dark Theme** - Beautiful dark mode design
- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/XO.git
cd XO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. The game is played on a 3x3 grid.
2. Players take turns placing their mark (X or O)
3. The first player to get 3 marks in a row (horizontally, vertically, or diagonally) wins
4. If all 9 squares are filled and no player has won, the game is a draw

## 📦 Build for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Method 1: Using gh-pages (Easiest)

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update the `homepage` field in `package.json`:
```json
"homepage": "https://yourusername.github.io/XO"
```

3. Deploy:
```bash
npm run deploy
```

### Method 2: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file (already included in this repo)

2. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/XO.git
git push -u origin main
```

3. Go to your repository settings on GitHub:
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. The app will automatically deploy on every push to the main branch!

Your app will be available at: `https://yourusername.github.io/XO`

### Method 3: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your production-ready files

3. You can deploy this folder to any static hosting service:
   - GitHub Pages
   - Netlify
   - Vercel
   - Cloudflare Pages
   - AWS S3
   - Firebase Hosting

## 🛠️ Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties and animations
- **Google Fonts** - Outfit font family

## 📁 Project Structure

```
XO/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main game component
│   ├── App.css         # Game-specific styles
│   ├── index.css       # Global styles and design system
│   └── main.jsx        # App entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --player-x: #667eea;
  --player-o: #f5576c;
  --bg-dark: #0f0c29;
  /* ... more variables */
}
```

### Animations

Modify animation durations in `src/index.css`:

```css
:root {
  --transition-fast: 0.15s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by modern web design trends
- Built with ❤️ using React and Vite

## 📧 Contact

For questions or suggestions, feel free to open an issue or reach out!

---

**Enjoy the game! 🎮**
