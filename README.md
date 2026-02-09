# Scientific Portfolio Website

A modern, responsive portfolio website for showcasing scientific publications and research projects. Built with pure HTML, CSS, and JavaScript - no build process required!

## 🌟 Features

- **Modern Design**: Gradient aurora hero background with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Static site with no backend dependencies
- **Easy to Update**: Simple YAML data files for publications and projects
- **Accessible**: Semantic HTML with proper ARIA labels and focus states
- **Filterable**: Client-side filtering and search for publications

## 🚀 Quick Start

1. **Edit your information** in the HTML files:
   - Open `index.html`, `publications.html`, and `projects.html`
   - Replace all `[Your Name]`, `[Your Field]`, `[Your University/Institution]`, etc. with your actual information
   - Update social media links in the footer

2. **Add your publications** in `data/publications.yaml`:
   - See the "Updating Publications" section below

3. **Add your projects** in `data/projects.yaml`:
   - See the "Updating Projects" section below

4. **Deploy to GitHub Pages**:
   - Push your changes to the `main` branch
   - Go to Settings > Pages
   - Select `main` branch as source
   - Your site will be available at `https://[username].github.io`

## 📝 Updating Publications

Edit the `data/publications.yaml` file to add, remove, or modify publications.

### Publication Structure

```yaml
publications:
  - title: "Your Paper Title"
    authors: "Author 1, Author 2, Author 3"
    venue: "Journal or Conference Name"
    year: 2025
    type: "journal"  # Options: journal, conference, preprint
    featured: true   # Set to true to show on homepage (optional)
    links:
      doi: "https://doi.org/your-doi"
      pdf: "link-to-pdf"
      code: "https://github.com/your-repo"  # optional
    abstract: "Brief description of your paper (optional)"
```

### Example

```yaml
publications:
  - title: "Deep Learning for Climate Prediction"
    authors: "Dr. Jane Smith, Dr. John Doe"
    venue: "Nature Climate Change"
    year: 2025
    type: "journal"
    featured: true
    links:
      doi: "https://doi.org/10.1038/example"
      pdf: "https://example.com/paper.pdf"
      code: "https://github.com/example/climate-dl"
    abstract: "This paper presents novel deep learning approaches..."
```

### Tips
- Set `featured: true` for up to 3 publications you want to highlight on the homepage
- The `type` field determines the badge color (journal=blue, conference=purple, preprint=pink)
- All links are optional - include only what's available
- Publications are displayed in the order they appear in the file

## 🔨 Updating Projects

Edit the `data/projects.yaml` file to add, remove, or modify projects.

### Project Structure

```yaml
projects:
  - name: "Project Name"
    description: "Brief description of what the project does"
    tags: ["Tag1", "Tag2", "Tag3"]
    tech_stack: "Python, TensorFlow, React, etc."
    featured: true  # Set to true to show on homepage (optional)
    links:
      github: "https://github.com/your-repo"
      demo: "https://demo-url.com"  # optional
      paper: "https://doi.org/paper"  # optional
    highlights:  # optional
      - "Key achievement or feature 1"
      - "Key achievement or feature 2"
```

### Example

```yaml
projects:
  - name: "NeuroViz: Brain Activity Visualization"
    description: "An interactive platform for visualizing brain activity data"
    tags: ["Neuroscience", "Visualization", "Web"]
    tech_stack: "Python, JavaScript, Three.js, React"
    featured: true
    links:
      github: "https://github.com/example/neuroviz"
      demo: "https://neuroviz.example.com"
    highlights:
      - "Real-time 3D brain visualization"
      - "Used by 50+ research labs"
```

### Tips
- Set `featured: true` for up to 3 projects you want to highlight on the homepage
- Tags create small badges - keep them concise (1-2 words each)
- Highlights are optional but help showcase key achievements
- All links are optional

## 🎨 Customization

### Colors

Edit `css/style.css` and modify the CSS variables in the `:root` section:

```css
:root {
    --primary-color: #6366f1;    /* Main brand color */
    --secondary-color: #8b5cf6;   /* Secondary brand color */
    --accent-color: #ec4899;      /* Accent color */
    /* ... other colors ... */
}
```

### Hero Gradient

The animated gradient in the hero section can be customized in `css/style.css`:

```css
.hero {
    background: linear-gradient(135deg, 
        #667eea 0%,   /* Color 1 */
        #764ba2 25%,  /* Color 2 */
        #f093fb 50%,  /* Color 3 */
        #4facfe 75%,  /* Color 4 */
        #00f2fe 100% /* Color 5 */
    );
}
```

### Typography

Change fonts in `css/style.css`:

```css
:root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
}
```

## 📁 File Structure

```
.
├── index.html              # Homepage
├── publications.html       # Publications page
├── projects.html          # Projects page
├── css/
│   └── style.css          # All styles
├── js/
│   ├── main.js            # Homepage functionality
│   ├── publications.js    # Publications page functionality
│   └── projects.js        # Projects page functionality
├── data/
│   ├── publications.yaml  # Publications data
│   └── projects.yaml      # Projects data
└── README.md              # This file
```

## 🔧 Technical Details

- **No Build Process**: Just edit files and push - GitHub Pages handles the rest
- **Pure JavaScript**: No frameworks or dependencies
- **YAML Data**: Simple, human-readable format for content management
- **Client-side Rendering**: All filtering and search happens in the browser
- **Semantic HTML**: Proper structure for accessibility and SEO
- **CSS Variables**: Easy theming and customization
- **Responsive Grid**: Automatically adapts to screen size

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio site, but feel free to fork it and customize it for your needs!

## ❓ Troubleshooting

**Publications/Projects not showing:**
- Check the browser console for errors
- Ensure YAML files are properly formatted (no tabs, correct indentation)
- Verify file paths are correct

**Styling looks broken:**
- Clear browser cache
- Check that `css/style.css` is properly linked
- Verify no syntax errors in CSS

**GitHub Pages not updating:**
- Check Settings > Pages to ensure it's enabled
- Wait a few minutes - deployments can take 5-10 minutes
- Check the Actions tab for build errors
