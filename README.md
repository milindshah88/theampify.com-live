# TheAmpify - Paid Media Marketing Agency Website

A modern, high-performance website for TheAmpify, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach, works perfectly on all devices
- **Performance Optimized**: Fast loading times and optimized assets
- **Contact Form**: Functional contact form with Formspree integration
- **Phone Input**: Advanced phone number input with country selection
- **Analytics Ready**: Built-in tracking system for GTM, Facebook Pixel, and more

## 📊 Analytics & Tracking Setup

The website includes a comprehensive tracking system that supports:

### Supported Platforms
- **Google Tag Manager (GTM)**
- **Facebook Pixel**
- **Google Analytics 4**
- **LinkedIn Insight Tag**
- **TikTok Pixel**
- **Custom Scripts**

### Quick Setup

1. **Edit tracking configuration** in `src/utils/tracking.ts`:

```typescript
export const trackingConfig: TrackingConfig = {
  gtm: {
    containerId: 'GTM-XXXXXXX', // Your GTM container ID
    enabled: true
  },
  facebookPixel: {
    pixelId: 'YOUR_PIXEL_ID', // Your Facebook Pixel ID
    enabled: true
  },
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // Your GA4 measurement ID
    enabled: true
  },
  linkedInInsight: {
    partnerId: 'YOUR_PARTNER_ID', // Your LinkedIn Partner ID
    enabled: true
  },
  tiktokPixel: {
    pixelId: 'YOUR_TIKTOK_PIXEL_ID', // Your TikTok Pixel ID
    enabled: true
  }
};
```

2. **Enable tracking** by setting `enabled: true` for each platform you want to use.

### Automatic Event Tracking

The website automatically tracks:
- **Form submissions** (with lead conversion tracking)
- **Button clicks** (CTA buttons, navigation)
- **Phone number clicks**
- **Email clicks**
- **Social media clicks**
- **Page views**

### Custom Event Tracking

You can track custom events using the provided functions:

```typescript
import { trackEvent, trackFormSubmission, trackButtonClick } from './utils/tracking';

// Track custom events
trackEvent('custom_event', { custom_data: 'value' });

// Track form submissions
trackFormSubmission('newsletter_signup', { email: 'user@example.com' });

// Track button clicks
trackButtonClick('download_brochure', 'pricing_section');
```

## 🛠 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 📝 Contact Form Setup

The contact form uses Formspree for handling submissions. To set it up:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Update the form action in `src/App.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js` or use CSS custom properties.

### Content
- Update company information in `src/App.tsx`
- Modify services, case studies, and testimonials
- Update contact information and social media links

### Tracking
- Add or remove tracking platforms in `src/utils/tracking.ts`
- Customize event tracking based on your needs
- Add custom conversion goals

## 📱 Phone Input Component

The website includes a sophisticated phone input component with:
- **Country selection dropdown** with flags and dial codes
- **Auto-detection** of user's country based on IP
- **Search functionality** for countries
- **Proper formatting** for different countries
- **Accessibility features**

## 🔧 Technical Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vite** for build tooling

## 📈 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with lazy loading

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Zero-config deployment with Git integration
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable cloud hosting

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## 📞 Support

For questions or support:
- **Email**: info@theampify.com
- **Phone**: +1-647-325-9928

## 📄 License

This project is proprietary to TheAmpify. All rights reserved.