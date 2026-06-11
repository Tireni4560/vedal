# Vedal Resources - Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Content Review
- [ ] Replace all placeholder images with actual photos
  - `hero-facility.jpg` - Main facility image
  - `infrastructure.jpg` - Infrastructure showcase
  - `warehouse.jpg`, `testing-lab.jpg`, `logistics.jpg`, `equipment.jpg` - Facility images
  - `team-1.jpg` through `team-6.jpg` - Team member photos
  - Product images in products.html
- [ ] Update all contact information (phone numbers, emails)
- [ ] Verify all links are working correctly
- [ ] Proofread all text content for accuracy
- [ ] Update company statistics and achievements

### 2. Technical Setup
- [ ] Configure Formspree form endpoint in `contacts.html`
- [ ] Set up Google Analytics tracking (add tracking code)
- [ ] Create and verify sitemap.xml
- [ ] Generate favicon.ico from favicon.svg
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify responsive design at all breakpoints

### 3. SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify meta descriptions are unique for each page
- [ ] Check Open Graph tags for social sharing
- [ ] Set up Google My Business listing
- [ ] Register with relevant industry directories

### 4. Performance Optimization
- [ ] Compress all images (use TinyPNG or similar)
- [ ] Enable Gzip compression on server
- [ ] Implement browser caching
- [ ] Minify CSS and JavaScript (optional)
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Optimize above-the-fold content loading

## 🌐 Deployment Options

### Option 1: Traditional Web Hosting (Recommended for Beginners)

**Providers**: Bluehost, HostGator, GoDaddy, SiteGround

**Steps**:
1. Purchase hosting plan and domain name
2. Access hosting control panel (cPanel)
3. Use File Manager or FTP client (FileZilla) to upload files
4. Upload all project files to `public_html` directory
5. Set file permissions (755 for folders, 644 for files)
6. Test website at your domain

**Pros**: Easy setup, email hosting included, cPanel interface  
**Cons**: Limited scalability, shared resources

---

### Option 2: Cloud Hosting (Recommended for Production)

**Providers**: AWS S3 + CloudFront, Netlify, Vercel, DigitalOcean

#### Deploying to Netlify (Easiest):
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder to Netlify dashboard
3. Website is live instantly with free SSL
4. Connect custom domain in settings
5. Configure form handling (Netlify Forms or Formspree)

#### Deploying to Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy
4. Connect custom domain

#### Deploying to AWS S3:
1. Create S3 bucket with your domain name
2. Enable static website hosting
3. Upload all files
4. Set bucket policy for public access
5. Configure CloudFront CDN (optional but recommended)
6. Set up Route 53 for DNS

**Pros**: Scalable, fast CDN, automatic SSL, version control  
**Cons**: May require technical knowledge

---

### Option 3: GitHub Pages (Free Hosting)

1. Create GitHub repository
2. Push project files to repository
3. Go to Settings > Pages
4. Select main branch as source
5. Website available at `username.github.io/repository-name`
6. Connect custom domain (optional)

**Note**: Form submissions may not work without external service

**Pros**: Free, easy Git integration  
**Cons**: Limited customization, no backend support

---

## 🔧 Server Configuration

### Apache (.htaccess already included)
The `.htaccess` file is included with:
- URL rewriting
- Security headers
- Compression
- Browser caching
- Error pages

### Nginx Configuration
If using Nginx, create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name vedal-resources.com www.vedal-resources.com;
    root /var/www/vedal-resources;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    # Cache Static Files
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Handle 404
    error_page 404 /index.html;
}
```

---

## 🔒 SSL/HTTPS Setup

### Let's Encrypt (Free SSL)
1. Install Certbot on your server
2. Run: `certbot --apache` or `certbot --nginx`
3. Follow prompts to configure SSL
4. Auto-renewal is configured automatically

### Cloudflare SSL
1. Sign up at Cloudflare
2. Add your domain
3. Update nameservers
4. Enable "Flexible" or "Full" SSL in Crypto settings

---

## 📊 Post-Deployment Tasks

### 1. Monitoring Setup
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Configure error tracking (Sentry, LogRocket)
- [ ] Set up Google Analytics goals and events
- [ ] Monitor form submission success rate

### 2. Backup Strategy
- [ ] Schedule regular backups of website files
- [ ] Keep backup copies in multiple locations
- [ ] Test restoration process
- [ ] Document backup procedure

### 3. Maintenance Schedule
- **Weekly**: Check form submissions, review analytics
- **Monthly**: Update content, check for broken links
- **Quarterly**: Review performance metrics, update team info
- **Annually**: Renew domain/hosting, update certifications

---

## 🧪 Testing Checklist

### Functionality Tests
- [ ] All navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Product filters work on all devices
- [ ] FAQ accordion expands/collapses properly
- [ ] Mobile menu toggles correctly
- [ ] Smooth scrolling works
- [ ] All buttons are clickable

### Cross-Browser Tests
- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Mobile browsers (Chrome/Safari)

### Responsive Tests
- [ ] Desktop (1920px, 1440px, 1024px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px, 360px)
- [ ] Landscape orientations

### Performance Tests
- [ ] Page load time < 3 seconds
- [ ] First Contentful Paint < 1.5 seconds
- [ ] Time to Interactive < 3.5 seconds
- [ ] Google PageSpeed score > 90

---

## 🐛 Troubleshooting

### Common Deployment Issues

**Issue**: Form not submitting
- **Solution**: Verify Formspree endpoint, check CORS settings

**Issue**: Images not loading
- **Solution**: Check file paths, ensure correct case sensitivity (Linux servers)

**Issue**: CSS not applying
- **Solution**: Clear browser cache, verify file paths

**Issue**: 404 errors on refresh (SPA routing)
- **Solution**: Configure server to redirect all routes to index.html

**Issue**: Mixed content warnings
- **Solution**: Ensure all resources use HTTPS

---

## 📞 Support Resources

- **Formspree Documentation**: https://help.formspree.io
- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **AWS S3 Guide**: https://aws.amazon.com/s3/
- **Let's Encrypt**: https://letsencrypt.org

---

## ✅ Launch Day Checklist

- [ ] Final content review
- [ ] All forms tested and working
- [ ] SSL certificate active
- [ ] DNS propagation complete
- [ ] Google Analytics tracking verified
- [ ] Social media profiles linked
- [ ] Email notifications configured
- [ ] Backup system in place
- [ ] Monitoring tools active
- [ ] Team trained on content updates

---

**Congratulations! Your website is ready to go live! 🎉**

For ongoing support and updates, refer to the README.md file.
