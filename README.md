# Scientific Portfolio Website - Abderrezzaq Sendjasni

A modern, responsive portfolio website for showcasing scientific publications and research projects. Built with pure HTML, CSS, and JavaScript - no build process required!

**Owner**: Abderrezzaq Sendjasni  
**Field**: Computer Vision and Signal Processing Research  
**Links**: [Google Scholar](https://scholar.google.com/citations?hl=en&user=TCkTy9QAAAAJ&view_op=list_works&sortby=pubdate) | [DBLP](https://dblp.org/pid/306/8611.html) | [LinkedIn](https://www.linkedin.com/in/abderrezzaq-sendjasni-ph-d-108905196/)

## 🌟 Features

- **Modern Design**: Gradient aurora hero background with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Static site with no backend dependencies
- **Easy to Update**: Simple YAML data files for publications and projects
- **Accessible**: Semantic HTML with proper ARIA labels and focus states
- **Filterable**: Client-side filtering and search for publications

## 🚀 Quick Start

The site is already configured for Abderrezzaq Sendjasni with:
- **Name**: Abderrezzaq Sendjasni
- **Tagline**: Computer Vision and Signal Processing Researcher
- **Email**: sendjansi.abderrezzaq@gmail.com (primary)
- **Additional emails**: Available via expand/copy in contact section
- **Social Links**: Google Scholar, DBLP, LinkedIn, GitHub

To update publications:
1. Edit `data/publications.yaml` (or `data/publications.bib` if using BibTeX)
2. Follow the structure documented in "Updating Publications" section below
3. Push changes to deploy

To enable projects:
1. Add project entries to `data/projects.yaml`
2. Projects will automatically appear on the site

## 📝 Updating Publications

Publications are managed through two files:
1. **`data/publications.bib`**: BibTeX source file (source of truth)
2. **`data/publications.yaml`**: YAML data file used by the website

### Quick Update Process

**Option 1: Direct YAML Update (Recommended for small changes)**
- Edit `data/publications.yaml` directly
- Publications are automatically grouped by category: Journals → Thesis → Conferences
- Within each group, publications are sorted by year (descending)

**Option 2: BibTeX Import (Recommended for major updates)**
1. Update `data/publications.bib` with your BibTeX entries
2. Convert BibTeX to YAML format
3. Ensure entries have proper `category` field (journal, thesis, or conference)

### Publication Structure

Each publication in `publications.yaml` should follow this structure:

```yaml
publications:
  - title: "Your Paper Title"
    authors: "Author 1, Author 2, Author 3"
    venue: "Journal or Conference Name"
    year: 2025
    type: "journal"  # Options: journal, conference, preprint, thesis
    category: "journal"  # Used for grouping: journal, thesis, conference
    featured: true   # Set to true to show on homepage (optional)
    links:
      doi: "https://doi.org/your-doi"
      pdf: "link-to-pdf"
      code: "https://github.com/your-repo"  # optional
    abstract: "Brief description of your paper (optional)"
```

### Grouping and Display

Publications are displayed in three groups:
1. **Journal Articles & Preprints** (first)
   - Includes regular journal articles and arXiv preprints
   - arXiv entries are labeled as "Preprint"
2. **Thesis** (second)
   - PhD theses and dissertations
3. **Conference Papers** (last)
   - Conference proceedings and workshop papers

Within each group, publications are sorted by year in descending order (newest first).

### Tips
- Set `featured: true` for up to 3 publications to highlight on the homepage
- For arXiv preprints, use `type: "preprint"` and `category: "journal"`
- The `category` field determines grouping; `type` determines the badge display
- All links are optional - include only what's available

## 🔨 Updating Projects

Projects are currently disabled. The `data/projects.yaml` file is empty, and the site shows a "Coming soon" message.

To enable projects in the future:
1. Edit `data/projects.yaml` and add project entries
2. Projects will automatically appear on the homepage and projects page

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
