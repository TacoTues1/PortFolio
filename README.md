# Modern Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS. This portfolio showcases your projects, skills, and experience in a clean and professional way.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ⚡ Smooth animations with Framer Motion
- 🎯 Smooth scrolling navigation
- 📝 Blog section
- 🔗 GitHub integration
- 📬 Contact form
- 🎯 SEO optimized
- ⚡ Fast loading
- 🔒 Security best practices

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll
- Axios
- GitHub API

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   # GitHub API Token (for fetching repositories)
   REACT_APP_GITHUB_TOKEN=your_github_token_here

   # Contact Form Endpoint (for the contact form submission)
   REACT_APP_CONTACT_FORM_ENDPOINT=your_contact_form_endpoint_here

   # Optional: Google Analytics ID
   REACT_APP_GA_ID=your_google_analytics_id_here

   # Optional: Social Media Links
   REACT_APP_GITHUB_URL=https://github.com/yourusername
   REACT_APP_LINKEDIN_URL=https://linkedin.com/in/yourusername
   REACT_APP_TWITTER_URL=https://twitter.com/yourusername

   # Optional: Personal Information
   REACT_APP_NAME=Your Name
   REACT_APP_TITLE=Full Stack Developer
   REACT_APP_EMAIL=your.email@example.com
   REACT_APP_LOCATION=Your Location, City, Country
   ```

   Note: Make sure to replace the placeholder values with your actual information. The `.env` file should not be committed to version control.

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Customization

### Personal Information

1. Update the content in the following components:
   - `src/components/sections/Hero.jsx`
   - `src/components/sections/About.jsx`
   - `src/components/sections/Skills.jsx`
   - `src/components/sections/Projects.jsx`
   - `src/components/sections/Contact.jsx`

2. Replace the placeholder images in the `public` directory with your own images.

3. Update the GitHub username in `src/components/sections/Projects.jsx` to fetch your repositories.

### Styling

1. The color scheme can be modified in `tailwind.config.js`
2. Custom styles can be added in `src/index.css`
3. Component-specific styles are included in each component file

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run lint` - Runs ESLint
- `npm run lint:fix` - Fixes ESLint errors
- `npm run format` - Formats code with Prettier

## Project Structure

```
my-portfolio/
├── public/
│   ├── images/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Blog.jsx
│   │       └── Contact.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Environment Variables

The following environment variables are used in the project:

### Required Variables
- `REACT_APP_GITHUB_TOKEN`: Your GitHub personal access token for fetching repositories
- `REACT_APP_CONTACT_FORM_ENDPOINT`: The endpoint URL for the contact form submission

### Optional Variables
- `REACT_APP_GA_ID`: Google Analytics tracking ID
- `REACT_APP_GITHUB_URL`: Your GitHub profile URL
- `REACT_APP_LINKEDIN_URL`: Your LinkedIn profile URL
- `REACT_APP_TWITTER_URL`: Your Twitter profile URL
- `REACT_APP_NAME`: Your full name
- `REACT_APP_TITLE`: Your professional title
- `REACT_APP_EMAIL`: Your email address
- `REACT_APP_LOCATION`: Your location

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [GitHub API](https://docs.github.com/en/rest)

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/my-portfolio](https://github.com/yourusername/my-portfolio)
