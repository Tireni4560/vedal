# Vedal Resources - Content Update Guide

## 📝 How to Update Website Content

This guide helps non-technical team members update website content safely.

---

## 🔧 Tools You'll Need

1. **Text Editor**: Visual Studio Code (recommended), Notepad++, or Sublime Text
2. **FTP Client**: FileZilla (for uploading changes)
3. **Image Editor**: Photoshop, GIMP, or Canva (for images)

---

## 📄 Updating Text Content

### Step 1: Open the HTML File
1. Locate the HTML file you want to edit (e.g., `index.html`, `about.html`)
2. Right-click and select "Open with" → Your text editor
3. **Important**: Always make a backup copy before editing

### Step 2: Find the Content
Look for text between HTML tags. Examples:

```html
<!-- This is a heading -->
<h2>About Vedal Resources</h2>

<!-- This is a paragraph -->
<p>We are a leading metal trading company.</p>

<!-- This is a list item -->
<li>Quality Assurance</li>
```

### Step 3: Edit the Text
Simply replace the text between the tags:

**Before:**
```html
<p>We are a leading metal trading company.</p>
```

**After:**
```html
<p>We are India's premier metal trading company since 2009.</p>
```

### Step 4: Save and Test
1. Save the file (Ctrl+S or Cmd+S)
2. Open the file in your browser to preview changes
3. If satisfied, upload to server via FTP

---

## 🖼️ Updating Images

### Image Requirements
- **Format**: JPG for photos, PNG for graphics with transparency
- **Size**: Optimize for web (keep under 500KB when possible)
- **Dimensions**: 
  - Hero images: 1920x800px
  - Team photos: 400x400px (square)
  - Product images: 800x600px
  - Facility images: 1200x800px

### Step 1: Prepare Your Image
1. Resize image to appropriate dimensions
2. Compress using [TinyPNG](https://tinypng.com) or similar tool
3. Name file descriptively (e.g., `team-new-member.jpg`)

### Step 2: Upload Image
1. Connect to server via FTP (FileZilla)
2. Navigate to project folder
3. Drag and drop your new image file
4. Note the exact filename

### Step 3: Update HTML Reference
Find the image tag and update the source:

**Before:**
```html
<img src="team-1.jpg" alt="Team member photo">
```

**After:**
```html
<img src="team-new-member.jpg" alt="John Doe - Sales Manager">
```

**Important**: Always include descriptive `alt` text for accessibility!

---

## 👥 Adding/Updating Team Members

### Location: `team.html` and `about.html`

### To Add New Team Member:
1. Copy an existing `.team-card` block
2. Paste it within the `.team-grid` div
3. Update the details:

```html
<div class="team-card">
  <img src="new-photo.jpg" alt="Jane Smith, Position Title" class="team-photo">
  <h3 class="team-name">Jane Smith</h3>
  <p class="team-title">Operations Director</p>
  <p class="team-bio">Brief biography here...</p>
  <div style="margin-top: 1rem; text-align: center;">
    <small style="color: var(--color-text-lighter);">Qualifications<br>Certifications</small>
  </div>
</div>
```

### To Update Existing Member:
Simply edit the text within their card section.

---

## 🛍️ Adding New Products

### Location: `products.html`

### Steps:
1. Find the product grid section (look for `<div class="grid-3">`)
2. Copy an existing `.product-card` block
3. Paste it where you want the new product
4. Update all details:

```html
<div class="product-card" data-category="ferrous">
  <div style="position: relative; overflow: hidden;">
    <img class="card-image" src="new-product.jpg" alt="Product Name" style="height: 200px;">
    <span class="badge badge-primary" style="position: absolute; top: 1rem; left: 1rem;">Ferrous</span>
  </div>
  <h3 class="card-title">Product Name</h3>
  <p class="card-text">Brief product description.</p>
  <ul class="card-list" style="margin-bottom: 1.5rem;">
    <li>Specification 1</li>
    <li>Specification 2</li>
    <li>Specification 3</li>
  </ul>
  <a href="contacts.html" class="btn btn-accent btn-sm" style="width: 100%; text-align: center;">Request Quote</a>
</div>
```

### Category Options:
- `data-category="ferrous"` - For ferrous metals
- `data-category="non-ferrous"` - For non-ferrous metals

### Badge Options:
- `<span class="badge badge-primary">Ferrous</span>`
- `<span class="badge badge-accent">Non-Ferrous</span>`

---

## ❓ Updating FAQ Section

### Location: `contacts.html`

### To Add New FAQ:
1. Find the FAQ section (search for "faq-item")
2. Copy an existing FAQ block
3. Paste it at the end of the FAQ list
4. Update question and answer:

```html
<div class="faq-item">
  <h3 class="faq-question">Your Question Here?</h3>
  <div class="faq-answer">
    Your detailed answer here. You can use multiple paragraphs.
  </div>
</div>
```

---

## 📊 Updating Statistics

### Locations: Various pages

Statistics appear in sections like:

```html
<div class="stat-number">15+</div>
<div class="stat-label">Years Industry Experience</div>
```

Simply update the numbers as needed. Common locations:
- Home page (index.html)
- About page (about.html)
- Infrastructure page (infrastructure.html)

---

## 🎨 Changing Colors (Advanced)

### Location: `variables.css`

Only edit if you understand CSS! The main colors are:

```css
--color-primary: #003D7A;      /* Main blue */
--color-accent: #FF6B35;       /* Orange accent */
--color-success: #27AE60;      /* Green */
--color-error: #E74C3C;        /* Red */
```

**Warning**: Changing colors affects the entire website. Test thoroughly!

---

## 📞 Updating Contact Information

Update in ALL footer sections across all pages:

```html
<p>📞 +91 XX XXXX XXXX</p>
<p>✉️ info@vedal-resources.com</p>
<p>Plot No. 45, MIDC Phase II, Navi Mumbai, India</p>
```

Also update in `contacts.html` main contact section.

---

## 🔗 Adding/Updating Links

### Internal Links:
```html
<a href="products.html">View Products</a>
```

### External Links:
```html
<a href="https://linkedin.com/company/vedal-resources" target="_blank">LinkedIn</a>
```

**Note**: Use `target="_blank"` for external links to open in new tab.

---

## 💡 Best Practices

### DO:
✅ Always backup files before editing  
✅ Test changes locally before uploading  
✅ Use descriptive filenames for images  
✅ Include alt text for all images  
✅ Keep paragraphs short and readable  
✅ Check mobile responsiveness after changes  
✅ Validate links work correctly  

### DON'T:
❌ Delete HTML tags accidentally  
❌ Upload unoptimized large images  
❌ Forget to test on mobile devices  
❌ Make changes directly on live server  
❌ Remove SEO meta tags  
❌ Break the navigation structure  

---

## 🚨 Emergency Recovery

If something goes wrong:

1. **Don't panic!**
2. Restore from your backup copy
3. If no backup, re-download original files from server
4. Start over with smaller, incremental changes
5. Test each change before moving to next

---

## 📱 Mobile Testing

After making changes:
1. Open browser developer tools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select different device sizes
4. Verify layout looks good on all screens

---

## 🔄 Regular Maintenance Tasks

### Weekly:
- Check contact form submissions
- Review analytics for errors
- Test all major links

### Monthly:
- Update blog/news (if added)
- Refresh team information
- Add new products/certifications
- Update statistics

### Quarterly:
- Review and update FAQ
- Check all images display correctly
- Update sustainability goals progress
- Review testimonials/case studies

---

## 📚 Learning Resources

- **HTML Basics**: [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- **CSS Basics**: [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- **Image Optimization**: [TinyPNG](https://tinypng.com)
- **Color Picker**: [Coolors](https://coolors.co)

---

## 🆘 Getting Help

For technical assistance:
1. Check this guide first
2. Review README.md for technical details
3. Contact web developer/IT support
4. Search online for specific error messages

---

**Remember**: When in doubt, ask for help! It's better to be safe than break the website. 😊
