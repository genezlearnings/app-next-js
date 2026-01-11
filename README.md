<<<<<<< HEAD
# app-next-js
GeneZ Learnings website have been developed with next.js
=======
# Genez Learnings LLP - Clinical Data Management Training Platform

A modern, responsive website for Genez Learnings LLP, an edtech company specializing in Clinical Data Management and Life Science career upskilling courses.

## 🎯 Features

- **Modern UI/UX**: Clean, professional design inspired by leading edtech platforms like GUVI and Scaler
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations using Framer Motion for enhanced user experience
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Next.js 15 for optimal performance and loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.23.24
- **Font**: Poppins (Google Fonts)
- **Language**: TypeScript/JavaScript
- **Primary Color**: #7b2979 (Genez Purple)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd genez-learnings
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
genez-learnings/
├── components/          # Reusable React components
│   ├── header.js       # Sticky navbar with hover animations
│   ├── footer.js       # Footer with contact info and social links
│   ├── Hero.js         # Hero section with gradient background
│   ├── WhyChooseUs.js  # Feature cards section
│   ├── coursecard.js   # Course card component
│   └── TestimonialCard.js # Student testimonial card
├── src/
│   ├── pages/          # Next.js pages (routes)
│   │   ├── _app.tsx    # Global app wrapper with Poppins font
│   │   ├── _document.tsx # HTML document with SEO meta tags
│   │   ├── index.tsx   # Homepage
│   │   ├── about.js    # About page
│   │   ├── courses.js  # Courses listing page
│   │   ├── testimonials.js # Testimonials page
│   │   └── contact.js  # Contact form page
│   └── styles/
│       └── globals.css # Global styles and Tailwind config
└── public/             # Static assets (favicon, images)
```

## Tech Stack

- **Framework**: Next.js 15.5.4 (Pages Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Font**: Poppins (Google Fonts)
- **Language**: TypeScript + JavaScript

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed

### Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd genez-learnings
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Deploy on Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel](https://vercel.com)
3. Click **"Add New Project"**
4. Import your Git repository
5. Vercel will auto-detect Next.js and configure settings
6. Click **"Deploy"**

Your site will be live in minutes with automatic HTTPS and global CDN!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project and deploy

### Environment Variables (if needed)
If you add any API keys or secrets later, configure them in:
- Vercel Dashboard → Project Settings → Environment Variables

## Pages Overview

- **Home** (`/`): Hero section, Why Choose Us, Courses preview, Testimonials
- **About** (`/about`): Company mission and approach
- **Courses** (`/courses`): Full course catalog with details
- **Testimonials** (`/testimonials`): Student success stories
- **Contact** (`/contact`): Contact form and company info

## Customization

### Update Brand Color
Edit `src/styles/globals.css`:
```css
--brand: #7b2979; /* Change this hex value */
```

### Update Content
- **Courses**: Edit `src/pages/courses.js`
- **Testimonials**: Edit `src/pages/testimonials.js`
- **Contact Info**: Edit `components/footer.js` and `src/pages/contact.js`

### Add New Pages
Create a new file in `src/pages/` (e.g., `src/pages/blog.js`) and it will automatically become a route.

## Mobile Optimization

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## SEO Features

- Meta tags for title, description, and Open Graph
- Semantic HTML structure
- Optimized images and fonts
- Fast page load times
- Mobile-friendly design

## Support

For questions or issues, contact:
- **Email**: info@genezlearnings.com
- **Phone**: +91 99999 99999

## License

© 2025 Genez Learnings LLP. All Rights Reserved.

---

Built with ❤️ using Next.js and Tailwind CSS
>>>>>>> jeeva
