# Vedal Resources - Image Optimization Guide

## 🖼️ Image Requirements & Optimization

This guide helps you prepare images for the website to ensure fast loading and professional appearance.

---

## 📏 Image Dimensions Guide

### Hero & Banner Images
- **Hero Section** (`hero-facility.jpg`)
  - Size: 1920x800px (or 1920x1080px)
  - Format: JPG
  - Max File Size: 300KB
  - Quality: 80-85%

### Facility Images
- **Infrastructure** (`infrastructure.jpg`)
  - Size: 1200x800px
  - Format: JPG
  - Max File Size: 250KB
  
- **Warehouse** (`warehouse.jpg`)
  - Size: 1200x800px
  - Format: JPG
  - Max File Size: 250KB
  
- **Testing Lab** (`testing-lab.jpg`)
  - Size: 1200x800px
  - Format: JPG
  - Max File Size: 250KB
  
- **Logistics** (`logistics.jpg`)
  - Size: 1200x800px
  - Format: JPG
  - Max File Size: 250KB
  
- **Equipment** (`equipment.jpg`)
  - Size: 1200x800px
  - Format: JPG
  - Max File Size: 250KB

### Team Photos
- **All Team Members** (`team-1.jpg` to `team-6.jpg`)
  - Size: 400x400px (square)
  - Format: JPG or PNG
  - Max File Size: 100KB
  - Quality: 75-80%
  - Note: Circular crop applied in CSS

### Product Images
- **All Products** (`product-*.jpg`)
  - Size: 800x600px
  - Format: JPG
  - Max File Size: 150KB
  - Quality: 75-80%
  - Consistent aspect ratio recommended

---

## 🎨 Image Best Practices

### Photography Tips
✅ Use good lighting (natural light preferred)  
✅ Keep backgrounds clean and uncluttered  
✅ Ensure subjects are in focus  
✅ Use consistent color grading across photos  
✅ Avoid heavy filters or effects  
✅ Capture at highest resolution, then resize  

### For Facility Photos
- Shoot during business hours with activity visible
- Show organized, clean spaces
- Include people working (with permission)
- Highlight modern equipment and technology
- Capture wide angles to show scale

### For Team Photos
- Use consistent background (white or office setting)
- Professional attire (business casual or formal)
- Good headroom above subject
- Natural, friendly expressions
- Consistent lighting across all photos

### For Product Photos
- Clean, white or neutral background
- Show product from best angle
- Include scale reference if helpful
- Multiple shots for important products
- Consistent lighting and styling

---

## 🔧 Image Optimization Tools

### Free Online Tools

#### 1. TinyPNG / TinyJPG (Recommended)
- Website: [tinypng.com](https://tinypng.com)
- Best for: Automatic compression
- Compression: Up to 70% reduction
- Quality: Excellent, maintains transparency

#### 2. Squoosh (by Google)
- Website: [squoosh.app](https://squoosh.app)
- Best for: Manual control over compression
- Features: Before/after comparison
- Formats: JPG, PNG, WebP

#### 3. Compressor.io
- Website: [compressor.io](https://compressor.io)
- Best for: Batch processing
- Supports: JPG, PNG, SVG, GIF

#### 4. Photopea (Online Photoshop Alternative)
- Website: [photopea.com](https://photopea.com)
- Best for: Editing and resizing
- Features: Full photo editor

### Desktop Software

#### Adobe Photoshop
- Industry standard
- Save for Web feature
- Batch processing available

#### GIMP (Free)
- Open-source alternative
- Export for Web options
- Plugin support

#### Affinity Photo
- One-time purchase
- Professional features
- Faster than Photoshop

---

## 📱 Optimization Workflow

### Step-by-Step Process

1. **Capture/Select Image**
   - Take photo at highest quality
   - Or select from existing photos

2. **Edit (If Needed)**
   - Adjust brightness/contrast
   - Crop to correct dimensions
   - Remove distractions
   - Apply minimal corrections

3. **Resize**
   - Resize to exact dimensions needed
   - Don't rely on HTML/CSS resizing
   - Maintain aspect ratio

4. **Compress**
   - Upload to TinyPNG or similar tool
   - Download optimized version
   - Check file size is under limit

5. **Name File**
   - Use descriptive name
   - Lowercase only
   - Hyphens between words
   - Example: `warehouse-interior-main.jpg`

6. **Test**
   - Open in browser
   - Check loading speed
   - Verify quality acceptable

---

## ⚡ Performance Targets

### File Size Guidelines
- Hero images: < 300KB
- Large facility photos: < 250KB
- Team photos: < 100KB
- Product images: < 150KB
- Icons/logos: < 50KB

### Loading Time Goals
- Page load: < 3 seconds
- First contentful paint: < 1.5 seconds
- Largest contentful paint: < 2.5 seconds

---

## 🎯 Format Selection Guide

### Use JPG When:
- Photographs with many colors
- Gradients or smooth transitions
- Real-world scenes
- Smaller file size priority

### Use PNG When:
- Images with text
- Graphics with sharp edges
- Transparency needed
- Logos and icons

### Use WebP When:
- Modern browsers only
- Maximum compression needed
- Both photo and graphic elements
- **Note**: Not supported in older browsers

### Use SVG When:
- Simple graphics/icons
- Logos that need to scale
- Diagrams or charts
- Need infinite scalability

---

## ❌ Common Mistakes to Avoid

### DON'T:
❌ Upload unoptimized camera photos (often 5-10MB each)  
❌ Use inconsistent image sizes  
❌ Forget to compress images  
❌ Use wrong file format  
❌ Stretch or distort images  
❌ Use copyrighted images without permission  
❌ Forget alt text for accessibility  
❌ Use images with watermarks  

### DO:
✅ Compress every image before uploading  
✅ Maintain consistent sizing within categories  
✅ Test on slow internet connections  
✅ Include descriptive alt text  
✅ Use proper licensing for stock photos  
✅ Keep backup of original high-res files  
✅ Optimize for both quality and speed  
✅ Consider mobile data usage  

---

## 🌟 Pro Tips

### For Better Results

1. **Batch Processing**
   - Optimize multiple images at once
   - Use same settings for consistency
   - Save time with automation

2. **Progressive JPG**
   - Loads gradually (blurry to clear)
   - Better user experience
   - Available in most editors

3. **Lazy Loading**
   - Images load as user scrolls
   - Improves initial page load
   - Can be added later via JavaScript

4. **CDN Usage**
   - Serve images from CDN
   - Faster global delivery
   - Automatic optimization

5. **Responsive Images**
   - Different sizes for different devices
   - HTML `srcset` attribute
   - Advanced feature for future enhancement

---

## 📊 Image Checklist

Before uploading each image:

- [ ] Correct dimensions
- [ ] Appropriate format (JPG/PNG)
- [ ] Compressed and optimized
- [ ] File size within limits
- [ ] Descriptive filename
- [ ] Alt text prepared
- [ ] Quality looks good
- [ ] No watermarks or copyright issues
- [ ] Consistent with other images
- [ ] Tested in browser

---

## 🔍 Testing Your Images

### Visual Quality Check
1. Open image at 100% zoom
2. Look for compression artifacts
3. Check color accuracy
4. Verify sharpness
5. Compare with original

### Performance Check
1. Use Chrome DevTools (F12)
2. Go to Network tab
3. Reload page
4. Check image load times
5. Verify file sizes

### Mobile Check
1. Test on actual mobile device
2. Check loading speed on 4G/3G
3. Verify images display correctly
4. Test in different orientations

---

## 🆘 Troubleshooting

### Issue: Images look pixelated
**Solution**: Increase source image resolution before resizing

### Issue: File size too large
**Solution**: Increase compression, reduce dimensions, or switch format

### Issue: Colors look wrong
**Solution**: Check color profile (use sRGB for web)

### Issue: Images load slowly
**Solution**: Compress more, implement lazy loading, use CDN

### Issue: Transparent backgrounds appear white
**Solution**: Use PNG format instead of JPG

---

## 📚 Additional Resources

- **Google PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- **Web.dev Image Optimization**: [web.dev/optimize-images](https://web.dev/optimize-images/)
- **Can I Use (Browser Support)**: [caniuse.com](https://caniuse.com)
- **Stock Photo Sites**: Unsplash, Pexels, Pixabay (free)

---

## 💡 Quick Reference Card

```
Image Type        | Dimensions  | Format | Max Size
------------------|-------------|--------|----------
Hero              | 1920x800    | JPG    | 300KB
Facility          | 1200x800    | JPG    | 250KB
Team              | 400x400     | JPG    | 100KB
Product           | 800x600     | JPG    | 150KB
Logo/Icon         | As needed   | PNG/SVG| 50KB
```

---

**Remember**: Optimized images = Faster website = Better user experience = More customers! 🚀
