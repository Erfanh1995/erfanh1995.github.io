# Personal Website

A modern personal website built with React and Material Design 3, featuring a clean and professional layout to showcase your academic and professional background.

## Features

- Responsive design using Material Design 3
- Multiple sections: Home, Education, Professional Experience, Publications, Teaching, NonProfit, Artworks and About
- Contact FAB (Floating Action Button) for easy communication
- GitHub Pages deployment
- Modern UI components and animations

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Erfanh1995/erfanh1995.github.io.git
   cd my-personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Customize the content:
   - Update personal information in each component
   - Add your photo in the About section
   - Update links to your CV, resume, and social profiles
   - Add your publications and teaching experience

## Deployment

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://erfanhosseini.com/"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Select the `gh-pages` branch as the source

## Customization

### Theme
The website uses Material Design 3 theming. You can customize the theme by modifying the `src/theme.ts` file.

### Content
Update the content in each component:
- `src/pages/Home.tsx`: News and quick links
- `src/pages/Education.tsx`: Academic background
- `src/pages/Professional.tsx`: Work experience
- `src/pages/Publications.tsx`: Research publications
- `src/pages/Teaching.tsx`: Teaching experience
- `src/pages/NonProfit.tsx`: NonProfit work
- `src/pages/Artworks.tsx`: Artworks
- `src/pages/About.tsx`: Personal information

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
