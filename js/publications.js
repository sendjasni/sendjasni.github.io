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

let allPublications = [];
let filteredPublications = [];

// Initialize publications page
async function initPublications() {
    const data = await loadYAML('data/publications.yaml');
    if (!data || !data.publications) {
        console.error('Failed to load publications data');
        return;
    }

    allPublications = data.publications;
    filteredPublications = [...allPublications];

    // Populate year filter
    const years = [...new Set(allPublications.map(pub => pub.year))].sort((a, b) => b - a);
    const yearFilter = document.getElementById('year-filter');
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Set up event listeners
    document.getElementById('search-input').addEventListener('input', filterPublications);
    document.getElementById('year-filter').addEventListener('change', filterPublications);
    document.getElementById('type-filter').addEventListener('change', filterPublications);

    renderPublications();
}

// Filter publications based on search and filters
function filterPublications() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const yearFilter = document.getElementById('year-filter').value;
    const typeFilter = document.getElementById('type-filter').value;

    filteredPublications = allPublications.filter(pub => {
        const matchesSearch = !searchTerm || 
            pub.title.toLowerCase().includes(searchTerm) ||
            pub.authors.toLowerCase().includes(searchTerm) ||
            pub.venue.toLowerCase().includes(searchTerm) ||
            (pub.abstract && pub.abstract.toLowerCase().includes(searchTerm));

        const matchesYear = !yearFilter || pub.year.toString() === yearFilter;
        
        // Handle type filtering: group journal and preprint together
        let matchesType = true;
        if (typeFilter) {
            const pubCategory = pub.category || pub.type;
            if (typeFilter === 'journal') {
                // Match both journal and preprint types
                matchesType = pubCategory === 'journal' || pub.type === 'preprint';
            } else {
                matchesType = pubCategory === typeFilter || pub.type === typeFilter;
            }
        }

        return matchesSearch && matchesYear && matchesType;
    });

    renderPublications();
}

// Render publications list
function renderPublications() {
    const container = document.getElementById('publications-list');
    const countElement = document.getElementById('results-count');

    countElement.textContent = filteredPublications.length;

    if (filteredPublications.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">No publications found matching your criteria.</p>';
        return;
    }

    // Group publications by category: Journals (including preprints), Thesis, Conferences
    const grouped = {
        journal: [],
        thesis: [],
        conference: []
    };

    filteredPublications.forEach(pub => {
        const category = pub.category || pub.type;
        if (category === 'journal' || category === 'preprint') {
            grouped.journal.push(pub);
        } else if (category === 'thesis') {
            grouped.thesis.push(pub);
        } else if (category === 'conference') {
            grouped.conference.push(pub);
        }
    });

    // Sort each group by year descending
    Object.keys(grouped).forEach(key => {
        grouped[key].sort((a, b) => b.year - a.year);
    });

    let html = '';

    // Render Journals (including preprints) first
    if (grouped.journal.length > 0) {
        html += '<div class="publication-group"><h2 class="group-title">Journal Articles & Preprints</h2>';
        html += grouped.journal.map(pub => renderPublicationCard(pub)).join('');
        html += '</div>';
    }

    // Render Thesis second
    if (grouped.thesis.length > 0) {
        html += '<div class="publication-group"><h2 class="group-title">Thesis</h2>';
        html += grouped.thesis.map(pub => renderPublicationCard(pub)).join('');
        html += '</div>';
    }

    // Render Conferences last
    if (grouped.conference.length > 0) {
        html += '<div class="publication-group"><h2 class="group-title">Conference Papers</h2>';
        html += grouped.conference.map(pub => renderPublicationCard(pub)).join('');
        html += '</div>';
    }

    container.innerHTML = html;
}

// Helper function to render a single publication card
function renderPublicationCard(pub) {
    // Determine the display type label
    let typeLabel = pub.type;
    if (pub.type === 'preprint' || (pub.category === 'journal' && pub.venue.toLowerCase().includes('arxiv'))) {
        typeLabel = 'Preprint';
    }

    return `
        <div class="publication-card">
            <span class="publication-type ${pub.type}">${typeLabel}</span>
            <h3 class="publication-title">${pub.title}</h3>
            <p class="publication-authors">${pub.authors}</p>
            <p class="publication-venue">${pub.venue}, ${pub.year}</p>
            ${pub.abstract ? `<p class="publication-abstract">${pub.abstract}</p>` : ''}
            <div class="publication-links">
                ${pub.links && pub.links.doi ? `<a href="${pub.links.doi}" class="publication-link" target="_blank">DOI</a>` : ''}
                ${pub.links && pub.links.pdf ? `<a href="${pub.links.pdf}" class="publication-link" target="_blank">PDF</a>` : ''}
                ${pub.links && pub.links.code ? `<a href="${pub.links.code}" class="publication-link" target="_blank">Code</a>` : ''}
            </div>
        </div>
    `;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initPublications);
