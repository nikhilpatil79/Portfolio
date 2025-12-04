# Nikhil Patil - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my work as a Full-Stack & GenAI Developer.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Dark Mode**: Seamless dark/light mode toggle with theme persistence
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Animations**: Smooth Framer Motion animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

This portfolio is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Header.js          # Navigation header
│   ├── Footer.js          # Footer with social links
│   ├── DarkModeToggle.js  # Theme toggle
│   ├── ThemeProvider.js   # Theme context provider
│   └── sections/
│       ├── Hero.js        # Hero section
│       ├── About.js       # About section
│       ├── Experience.js  # Work experience
│       ├── Projects.js    # Featured projects
│       ├── Skills.js      # Skills & technologies
│       ├── Education.js   # Education & certifications
│       └── Contact.js     # Contact section
├── public/
│   └── profile.jpg        # Profile image
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit the content in the respective component files:
- `components/sections/Hero.js` - Name, title, tagline
- `components/sections/About.js` - About text
- `components/sections/Experience.js` - Work experience
- `components/sections/Projects.js` - Project details
- `components/sections/Skills.js` - Skills and technologies
- `components/sections/Education.js` - Education and certifications
- `components/sections/Contact.js` - Contact information

### Change Colors

Edit `tailwind.config.js` to customize the color palette.

### Update Profile Image

Replace `public/profile.jpg` with your own image.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Nikhil Patil**
- GitHub: [@nikhilpatil79](https://github.com/nikhilpatil79)
- LinkedIn: [nikhil-patil-a30448288](https://linkedin.com/in/nikhil-patil-a30448288)
- Email: nikilpatil079@gmail.com

---

Built with ❤️ using Next.js and Tailwind CSS
