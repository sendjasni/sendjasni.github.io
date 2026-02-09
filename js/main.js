// Load and parse YAML data
async function loadYAML(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return parseYAML(text);
    } catch (error) {
        console.error('Error loading YAML:', error);
        return null;
    }
}

// Simple YAML parser (supports basic YAML structure)
function parseYAML(yamlText) {
    const lines = yamlText.split('\n');
    const result = { publications: [], projects: [] };
    let currentItem = null;
    let currentKey = null;
    let inList = false;
    let listKey = null;

    for (let line of lines) {
        // Skip empty lines and comments
        if (!line.trim() || line.trim().startsWith('#')) continue;

        // Check for main sections
        if (line.match(/^(publications|projects):/)) {
            currentKey = line.split(':')[0];
            continue;
        }

        // Check for list item start
        if (line.match(/^\s+-\s+(\w+):/)) {
            if (currentItem) {
                result[currentKey].push(currentItem);
            }
            currentItem = {};
            inList = false;
            const match = line.match(/^\s+-\s+(\w+):\s*(.*)$/);
            if (match) {
                const key = match[1];
                const value = match[2].replace(/["']/g, '');
                currentItem[key] = value;
            }
            continue;
        }

        // Check for nested object (like links)
        if (line.match(/^\s+(\w+):\s*$/) && currentItem) {
            const key = line.match(/^\s+(\w+):\s*$/)[1];
            currentItem[key] = {};
            listKey = key;
            inList = true;
            continue;
        }

        // Check for nested list (like highlights)
        if (line.match(/^\s+(\w+):\s*$/) && currentItem && line.match(/highlights|tags/)) {
            const key = line.match(/^\s+(\w+):\s*$/)[1];
            currentItem[key] = [];
            listKey = key;
            inList = true;
            continue;
        }

        // Parse nested object properties
        if (inList && line.match(/^\s{4,}(\w+):\s*(.+)$/)) {
            const match = line.match(/^\s{4,}(\w+):\s*(.+)$/);
            const key = match[1];
            const value = match[2].replace(/["']/g, '');
            if (typeof currentItem[listKey] === 'object' && !Array.isArray(currentItem[listKey])) {
                currentItem[listKey][key] = value;
            }
            continue;
        }

        // Parse list items (like highlights)
        if (inList && line.match(/^\s{4,}-\s+(.+)$/)) {
            const value = line.match(/^\s{4,}-\s+(.+)$/)[1].replace(/["']/g, '');
            if (Array.isArray(currentItem[listKey])) {
                currentItem[listKey].push(value);
            }
            continue;
        }

        // Parse regular properties
        if (line.match(/^\s+(\w+):\s*(.*)$/) && currentItem) {
            inList = false;
            const match = line.match(/^\s+(\w+):\s*(.*)$/);
            const key = match[1];
            let value = match[2].replace(/["']/g, '');
            
            // Convert to appropriate type
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            else if (!isNaN(value) && value !== '') value = parseInt(value);
            
            currentItem[key] = value;
        }
    }

    // Add last item
    if (currentItem && currentKey) {
        result[currentKey].push(currentItem);
    }

    return result;
}

// Render featured publications on homepage
async function renderFeaturedPublications() {
    const container = document.getElementById('featured-publications');
    if (!container) return;

    const data = await loadYAML('data/publications.yaml');
    if (!data || !data.publications) return;

    const featured = data.publications.filter(pub => pub.featured).slice(0, 3);

    container.innerHTML = featured.map(pub => `
        <div class="publication-card">
            <span class="publication-type ${pub.type}">${pub.type}</span>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-venue">${pub.venue}, ${pub.year}</p>
            <div class="publication-links">
                ${pub.links && pub.links.doi ? `<a href="${pub.links.doi}" class="publication-link" target="_blank">DOI</a>` : ''}
                ${pub.links && pub.links.pdf ? `<a href="${pub.links.pdf}" class="publication-link" target="_blank">PDF</a>` : ''}
                ${pub.links && pub.links.code ? `<a href="${pub.links.code}" class="publication-link" target="_blank">Code</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Render featured projects on homepage
async function renderFeaturedProjects() {
    const container = document.getElementById('featured-projects');
    if (!container) return;

    const data = await loadYAML('data/projects.yaml');
    if (!data || !data.projects) return;

    const featured = data.projects.filter(proj => proj.featured).slice(0, 3);

    container.innerHTML = featured.map(proj => `
        <div class="project-card">
            <h3 class="project-name">${proj.name}</h3>
            <p class="project-description">${proj.description}</p>
            <div class="project-tags">
                ${proj.tags ? proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('') : ''}
            </div>
            <div class="project-links">
                ${proj.links && proj.links.github ? `<a href="${proj.links.github}" class="project-link" target="_blank">GitHub</a>` : ''}
                ${proj.links && proj.links.demo ? `<a href="${proj.links.demo}" class="project-link" target="_blank">Demo</a>` : ''}
                ${proj.links && proj.links.paper ? `<a href="${proj.links.paper}" class="project-link" target="_blank">Paper</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize homepage
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedPublications();
    renderFeaturedProjects();
});
