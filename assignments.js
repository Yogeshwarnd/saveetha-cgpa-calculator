// assignments.js - Unchanged
const assignmentsTutorials = [
  {
    code: 'CSAO9',
    title: 'Programming in Java',
    link: 'https://drive.google.com/your-assignment-link-1',
    type: 'Assignment'
  },
  {
    code: 'CSAO9',
    title: 'Programming in Java',
    link: 'https://drive.google.com/your-tutorial-link-1',
    type: 'Tutorial'
  },
  {
    code: 'BTAI1',
    title: 'Biology and Environmental Science for Engineers',
    link: 'https://drive.google.com/your-assignment-link-2',
    type: 'Assignment'
  },
  {
    code: 'CSAO4',
    title: 'Operating Systems Map',
    link: 'https://drive.google.com/your-tutorial-link-2',
    type: 'Tutorial'
  },
  // Add more objects here with code, title, link, type (Assignment or Tutorial)
];

function renderAssignments(filter = "") {
  const grid = document.getElementById("assignmentGrid");
  grid.innerHTML = "";

  let filtered = assignmentsTutorials
    .filter(at => at.title.toLowerCase().includes(filter.toLowerCase()) || at.code.toLowerCase().includes(filter.toLowerCase()));

  // If no filter, show only first 3; else show all filtered
  if (filter.trim() === "") {
    filtered = filtered.slice(0, 3);
    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `<p>Search above to discover assignments and tutorials! 🔍</p>`;
      grid.appendChild(noResults);
      return;
    }
  }

  filtered.forEach((at, index) => {
    const card = document.createElement("div");
    card.className = "card assignment-card";
    card.innerHTML = `
      <div class="card-icon">📚</div>
      <div class="card-content">
        <div class="code">${at.code}</div>
        <div class="title">${at.title}</div>
        <a href="${at.link}" class="assignment-link" target="_blank">${at.type} 📎</a>
        <div class="vibe-tag">Get Started! 📖</div>
      </div>
    `;
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });

  if (filtered.length === 0 && filter.trim() !== "") {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `<p>No assignments or tutorials found. Try a different search! 😊</p>`;
    grid.appendChild(noResults);
  }
}