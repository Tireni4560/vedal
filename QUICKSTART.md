# Vedal Resources - Quick Start Guide

## 🚀 Get Your Website Live in 5 Steps

### Step 1: Prepare Your Content (30 minutes)
- [ ] Gather all company photos (facility, team, products)
- [ ] Write/verify all text content
- [ ] Collect contact information
- [ ] Prepare product specifications

### Step 2: Replace Placeholder Images (1 hour)
Replace these files with your actual images:
```
hero-facility.jpg       → Main hero image (1920x800px)
infrastructure.jpg      → Infrastructure showcase (1200x800px)
warehouse.jpg           → Warehouse interior (1200x800px)
testing-lab.jpg         → Lab equipment (1200x800px)
logistics.jpg           → Logistics/fleet (1200x800px)
equipment.jpg           → Processing equipment (1200x800px)
team-1.jpg to team-6.jpg → Team member photos (400x400px each)
product-*.jpg           → Product images (800x600px each)
```

**Tip**: Use [TinyPNG.com](https://tinypng.com) to compress images before uploading.

### Step 3: Update Contact Information (15 minutes)
Search and replace in ALL HTML files:
- Phone number: `+91 xx xxxx xxxx` → Your actual number
- Email addresses if different
- Physical address if different

**Files to update**: All pages (especially footers)

### Step 4: Configure Contact Form (10 minutes)
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint URL
4. In `contacts.html`, find:
   ```html
   <form action="https://formspree.io/f/xyzqwert" method="POST">
   ```
5. Replace `xyzqwert` with your actual form ID

### Step 5: Deploy Your Website (15 minutes)

#### Option A: Netlify (Easiest - Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Drag your entire project folder to the dashboard
3. Done! Your site is live
4. Connect custom domain in settings

#### Option B: Traditional Hosting
1. Purchase hosting + domain
2. Upload all files via FTP to `public_html`
3. Visit your domain

---

## ✅ Pre-Launch Checklist

Before going live, verify:

- [ ] All images replaced and optimized
- [ ] Contact information updated everywhere
- [ ] Form submission tested
- [ ] Links working on all pages
- [ ] Mobile responsive on phone/tablet
- [ ] Tested on Chrome, Firefox, Safari
- [ ] SSL certificate installed
- [ ] Google Analytics added (optional)
- [ ] Favicon displays correctly
- [ ] No console errors in browser

---

## 🎯 Essential Post-Launch Tasks

### Day 1:
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business
- [ ] Test contact form one more time
- [ ] Share website on social media

### Week 1:
- [ ] Monitor form submissions daily
- [ ] Check analytics for traffic
- [ ] Verify all links still work
- [ ] Ask team to review for errors

### Month 1:
- [ ] Review analytics data
- [ ] Update any incorrect information
- [ ] Add testimonials if available
- [ ] Plan content updates

---

## 📱 Mobile Optimization Tips

After deployment, test on actual devices:
1. iPhone (Safari)
2. Android phone (Chrome)
3. iPad/Tablet
4. Different screen sizes

Check:
- Navigation menu works
- Text is readable
- Buttons are tappable
- Forms are usable
- Images load properly

---

## 🔍 SEO Quick Wins

1. **Google My Business**: Register your business location
2. **Social Profiles**: Link website to LinkedIn, Facebook
3. **Local Directories**: List on industry directories
4. **Content Updates**: Add blog posts or news regularly
5. **Reviews**: Encourage customers to leave reviews

---

## 🆘 Common Issues & Solutions

### Issue: Images not showing
**Solution**: Check file names match exactly (case-sensitive on Linux servers)

### Issue: Form not submitting
**Solution**: Verify Formspree endpoint, check browser console for errors

### Issue: Styles look broken
**Solution**: Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### Issue: Mobile menu not working
**Solution**: Ensure main.js is loading, check for JavaScript errors

---

## 📞 Need Help?

- **Technical Issues**: See README.md and DEPLOYMENT.md
- **Content Updates**: See CONTENT-GUIDE.md
- **Version History**: See CHANGELOG.md

---

## 🎉 You're Ready!

Your professional metal trading website is ready to attract customers and grow your business!

**Estimated Total Setup Time**: 2-3 hours  
**Technical Skill Required**: Beginner-friendly  

Good luck! 🚀
