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

// Simple YAML parser
function parseYAML(yamlText) {
    const lines = yamlText.split('\n');
    const result = { publications: [], projects: [] };
    let currentItem = null;
    let currentKey = null;
    let inList = false;
    let listKey = null;

    for (let line of lines) {
        if (!line.trim() || line.trim().startsWith('#')) continue;

        if (line.match(/^(publications|projects):/)) {
            currentKey = line.split(':')[0];
            continue;
        }

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

        if (line.match(/^\s+(\w+):\s*$/) && currentItem) {
            const key = line.match(/^\s+(\w+):\s*$/)[1];
            if (key === 'highlights' || key === 'tags') {
                currentItem[key] = [];
            } else {
                currentItem[key] = {};
            }
            listKey = key;
            inList = true;
            continue;
        }

        if (inList && line.match(/^\s{4,}(\w+):\s*(.+)$/)) {
            const match = line.match(/^\s{4,}(\w+):\s*(.+)$/);
            const key = match[1];
            const value = match[2].replace(/["']/g, '');
            if (typeof currentItem[listKey] === 'object' && !Array.isArray(currentItem[listKey])) {
                currentItem[listKey][key] = value;
            }
            continue;
        }

        if (inList && line.match(/^\s{4,}-\s+(.+)$/)) {
            const value = line.match(/^\s{4,}-\s+(.+)$/)[1].replace(/["']/g, '');
            if (Array.isArray(currentItem[listKey])) {
                currentItem[listKey].push(value);
            }
            continue;
        }

        if (line.match(/^\s+(\w+):\s*(.*)$/) && currentItem) {
            inList = false;
            const match = line.match(/^\s+(\w+):\s*(.*)$/);
            const key = match[1];
            let value = match[2];
            
            // Handle inline arrays
            if (value.trim().startsWith('[') && value.trim().endsWith(']')) {
                try {
                    value = JSON.parse(value);
                } catch (e) {
                    value = value.trim().slice(1, -1).split(',').map(item => 
                        item.trim().replace(/^["']|["']$/g, '')
                    );
                }
            } else {
                value = value.replace(/["']/g, '');
                if (value === 'true') value = true;
                else if (value === 'false') value = false;
                else if (!isNaN(value) && value !== '') value = parseInt(value);
            }
            
            currentItem[key] = value;
        }
    }

    if (currentItem && currentKey) {
        result[currentKey].push(currentItem);
    }

    return result;
}

// Initialize projects page
async function initProjects() {
    const data = await loadYAML('data/projects.yaml');
    if (!data || !data.projects) {
        console.error('Failed to load projects data');
        return;
    }

    renderProjects(data.projects);
}

// Render projects grid
function renderProjects(projects) {
    const container = document.getElementById('projects-grid');

    if (projects.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Coming Soon</h2>
                <p style="color: var(--text-secondary); font-size: 1.1rem;">Project showcase is currently being prepared. Check back soon!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projects.map(proj => `
        <div class="project-card">
            <h3 class="project-name">${proj.name}</h3>
            <p class="project-description">${proj.description}</p>
            
            ${proj.tags && proj.tags.length > 0 ? `
                <div class="project-tags">
                    ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
            
            ${proj.tech_stack ? `
                <div class="project-tech">
                    <h4>Tech Stack:</h4>
                    <p class="project-tech-list">${proj.tech_stack}</p>
                </div>
            ` : ''}
            
            ${proj.highlights && proj.highlights.length > 0 ? `
                <div class="project-highlights">
                    <h4>Highlights:</h4>
                    <ul>
                        ${proj.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            
            <div class="project-links">
                ${proj.links && proj.links.github ? `<a href="${proj.links.github}" class="project-link" target="_blank">GitHub</a>` : ''}
                ${proj.links && proj.links.demo ? `<a href="${proj.links.demo}" class="project-link" target="_blank">Demo</a>` : ''}
                ${proj.links && proj.links.paper ? `<a href="${proj.links.paper}" class="project-link" target="_blank">Paper</a>` : ''}
            </div>
        </div>
    `).join('');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initProjects);
