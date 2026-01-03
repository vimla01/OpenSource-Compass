let programsData = [];

async function loadPrograms() {
    const response = await fetch('data/programs.json');
    programsData = await response.json();
    displayPrograms(programsData);
}

function displayPrograms(programs) {
    const grid = document.getElementById('programsGrid');
    grid.innerHTML = programs.map(p => `
        <div class="card">
            <h4>${p.name}</h4>
            <span class="badge">${p.category}</span>
            <p>${p.description}</p>
            <p><strong>Timeline:</strong> ${p.timeline}</p>
            <a href="${p.link}" class="btn-secondary">View Guide</a>
        </div>
    `).join('');
}

// Search and Filter Event Listeners
document.getElementById('searchBar').addEventListener('input', (e) => {
    const filtered = programsData.filter(p => 
        p.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    displayPrograms(filtered);
});