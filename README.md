# Vedal Resources - Metal Trading Company Website

## 🏭 Project Overview

Vedal Resources is a professional B2B metal trading company website built with modern HTML, CSS, and JavaScript. The website showcases the company's products, infrastructure, team, and commitment to quality and sustainability.

## 📋 Features

### Core Pages
- **Home** - Landing page with company introduction, product categories, and key highlights
- **About** - Company story, mission, vision, values, and credentials
- **Products** - Comprehensive product catalog with filtering (Ferrous & Non-Ferrous metals)
- **Infrastructure** - Facilities overview including warehouses, testing labs, and logistics
- **Contact** - Contact form with validation, business information, and FAQ section
- **Team** - Leadership team profiles and career opportunities
- **Sustainability** - Environmental, social, and economic responsibility initiatives
- **Certifications** - Quality certifications and compliance standards

### Technical Features
- ✅ Fully responsive design (mobile-first approach)
- ✅ Mobile hamburger navigation menu
- ✅ Form validation with real-time feedback
- ✅ Product category filtering system
- ✅ Smooth scrolling navigation
- ✅ FAQ accordion functionality
- ✅ Scroll-triggered animations
- ✅ SEO optimized with meta tags and schema.org markup
- ✅ Accessible (ARIA labels, keyboard navigation, focus states)
- ✅ Cross-browser compatible
- ✅ Print-friendly styles

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, Custom Properties
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Roboto & Open Sans typography
- **Formspree** - Form submission handling

## 📁 Project Structure

```
vedal-resources/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products catalog
├── infrastructure.html     # Infrastructure details
├── contacts.html           # Contact form & info
├── team.html               # Team members
├── sustainability.html     # Sustainability initiatives
├── certfications.html      # Certifications & compliance
├── main.js                 # Main JavaScript file
├── styles.css              # Main stylesheet (imports all CSS modules)
├── variables.css           # Design tokens (colors, fonts, spacing)
├── base.css                # Base/reset styles
├── layout.css              # Layout utilities
├── component.css           # Component styles
├── responsive.css          # Responsive breakpoints
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#003D7A` (Deep Blue)
- **Primary Dark**: `#002550`
- **Accent**: `#FF6B35` (Orange)
- **Text**: `#1A1A1A` (Dark Gray)
- **Background**: `#FFFFFF` (White)
- **Success**: `#27AE60` (Green)
- **Error**: `#E74C3C` (Red)

### Typography
- **Display Font**: Roboto (Headings)
- **Body Font**: Open Sans (Content)
- **Font Sizes**: Responsive scale from 0.75rem to 3.2rem

### Spacing Scale
8px-based system: 4px, 8px, 16px, 24px, 32px, 48px, 64px

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional but recommended)

### Installation

1. Clone or download the project files
2. Open the project folder in your code editor
3. To view locally, either:
   - Open `index.html` directly in your browser
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```
4. Navigate to `http://localhost:8000` in your browser

### Form Configuration

The contact form uses Formspree for submissions. To configure:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form endpoint
3. Replace the form action URL in `contacts.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 📝 Customization Guide

### Updating Content
- Edit HTML files directly to update text content
- Replace placeholder images (`hero-facility.jpg`, `team-1.jpg`, etc.) with actual images
- Update contact information in footer sections across all pages

### Modifying Colors
Edit `variables.css` to change the color scheme:
```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-accent: #YOUR_COLOR;
}
```

### Adding New Products
In `products.html`, duplicate a `.product-card` div and update:
- Image source
- Product title and description
- Specifications list
- Category attribute (`data-category`)

### Updating Team Members
In `team.html` and `about.html`, modify `.team-card` elements with:
- Team member photo
- Name and title
- Biography
- Qualifications

## 🔧 JavaScript Functionality

### Navigation
- Sticky header with scroll effect
- Mobile hamburger menu toggle
- Active link highlighting based on current page

### Form Validation
- Real-time field validation
- Email format checking
- Phone number validation
- Required field enforcement
- Spam protection (honeypot field)

### Product Filters
- Filter products by category (All, Ferrous, Non-Ferrous)
- Smooth transition animations
- Dynamic visibility toggling

### FAQ Accordion
- Click to expand/collapse answers
- Only one item open at a time
- Smooth height transitions

### Scroll Animations
- Elements animate when entering viewport
- Uses Intersection Observer API
- Performance optimized

## 🌐 SEO Optimization

Each page includes:
- Descriptive `<title>` tags
- Meta descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- Schema.org structured data (JSON-LD)
- Canonical URLs
- Semantic HTML structure

## ♿ Accessibility Features

- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly markup
- Sufficient color contrast ratios
- Alt text on images
- Form labels and error messages

## 📱 Responsive Breakpoints

- **Mobile**: 0-480px
- **Tablet**: 481-768px
- **Desktop**: 769-1024px
- **Large Desktop**: 1025px+
- **Ultra-wide**: 1441px+

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is proprietary. All rights reserved.

## 👥 Credits

**Company**: Vedal Resources Pvt. Ltd.  
**Location**: Navi Mumbai, Maharashtra, India  
**Industry**: Metal Trading (Ferrous & Non-Ferrous)

## 📞 Contact

For inquiries about this website or business:
- **Email**: info@vedal-resources.com
- **Phone**: +91 22 2779 0000
- **Address**: Plot No. 45, MIDC Phase II, Navi Mumbai, Maharashtra 400710, India

## 🔄 Maintenance

### Regular Updates
1. Update product listings as inventory changes
2. Refresh team member information
3. Add new certifications when obtained
4. Update statistics and achievements
5. Review and update FAQ section

### Performance Monitoring
- Monitor form submission success rates
- Check page load times
- Verify mobile responsiveness on various devices
- Test cross-browser compatibility

## 🐛 Troubleshooting

### Common Issues

**Form not submitting:**
- Verify Formspree endpoint URL is correct
- Check browser console for errors
- Ensure honeypot field is hidden

**Mobile menu not working:**
- Clear browser cache
- Check that main.js is loading correctly
- Verify no JavaScript errors in console

**Styles not applying:**
- Ensure all CSS files are properly linked
- Check browser cache
- Verify file paths are correct

**Images not displaying:**
- Check image file paths
- Ensure images exist in the correct location
- Verify file extensions match references

## 📊 Future Enhancements

Potential improvements for future versions:
- [ ] Product search functionality
- [ ] Shopping cart / quote builder
- [ ] Customer portal/login
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Blog/news section
- [ ] Advanced analytics tracking
- [ ] Image lazy loading
- [ ] Progressive Web App (PWA) features
- [ ] Backend CMS integration

---

**Last Updated**: June 2026  
**Version**: 1.0.0
#   v e d a l  
 