// maps.js - Unchanged
const conceptMaps = [
  {
    code: 'CSAO9',
    title: 'Programming in Java',
    driveId: 'your-drive-id-1',
    count: 2
  },
  {
    code: 'BTAI1',
    title: 'Biology and Environmental Science for Engineers',
    driveId: 'your-drive-id-2',
    count: 8
  },
  {
    code: 'CSAO4',
    title: 'Operating Systems Map',
    driveId: 'your-drive-id-3',
    count: 3
  },
  {
    code: 'CSAO5',
    title: 'Database Management Systems',
    driveId: 'your-drive-id-4',
    count: 5
  },
  {
    code: 'CSAO6',
    title: 'Design and Analysis of Algorithms',
    driveId: 'your-drive-id-5',
    count: 0
  },
  {
    code: 'CSAO7',
    title: 'Computer Networks',
    driveId: 'your-drive-id-6',
    count: 8
  },
  {
    code: 'CSAO8',
    title: 'Python Programming',
    driveId: 'your-drive-id-7',
    count: 6
  },
  {
    code: 'CSAI2',
    title: 'Computer Architecture',
    driveId: 'your-drive-id-8',
    count: 0
  },
  {
    code: 'CSAI3',
    title: 'Theory of Computation',
    driveId: 'your-drive-id-9',
    count: 6
  }
];


// Add EmailJS SDK (include this script tag in <head> of index.html for EmailJS)
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

// Initialize EmailJS with your public key (add after the script tag)
(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

function renderMaps(filter = "") {
  const grid = document.getElementById("mapGrid");
  grid.innerHTML = "";

  let filtered = conceptMaps
    .filter(m => m.title.toLowerCase().includes(filter.toLowerCase()) || m.code.toLowerCase().includes(filter.toLowerCase()));

  // If no filter, show only first 3; else show all filtered
  if (filter.trim() === "") {
    filtered = filtered.slice(0, 3);
    if (filtered.length === 0) {
      const noResults = document.createElement("div");
      noResults.className = "no-results";
      noResults.innerHTML = `<p>Search above to discover concept maps! 🔍</p>`;
      grid.appendChild(noResults);
      return;
    }
  }

  filtered.forEach((m, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute('data-count', m.count || '0');
    card.innerHTML = `
      <div class="card-icon">📄</div>
      <div class="card-content">
        <div class="code">${m.code}</div>
        <div class="title">${m.title}</div>
        <div class="vibe-tag">Boost Your Grades! ✨</div>
      </div>
      <div class="view-count">
        <span class="icon">👁️</span>
        <span class="count">${m.count || 0}</span>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `https://drive.google.com/uc?id=${m.driveId}`;
    };
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });

  if (filtered.length === 0 && filter.trim() !== "") {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `<p>No concept maps found. Try a different search! 😊</p>`;
    grid.appendChild(noResults);
  }
}

document.getElementById("search").addEventListener("input", e => {
  renderMaps(e.target.value);
});

setTimeout(() => {
  renderMaps();
}, 100);

// CGPA Calculator Script
function calculateCGPA() {
  const s = parseInt(document.getElementById('s').value) || 0;
  const a = parseInt(document.getElementById('a').value) || 0;
  const b = parseInt(document.getElementById('b').value) || 0;
  const c = parseInt(document.getElementById('c').value) || 0;
  const d = parseInt(document.getElementById('d').value) || 0;
  const e = parseInt(document.getElementById('e').value) || 0;

  const totalSubjects = s + a + b + c + d + e;

  if (totalSubjects === 0) {
    document.getElementById('result').innerHTML = '0.00';
    return;
  }

  const totalPoints = (s * 10) + (a * 9) + (b * 8) + (c * 7) + (d * 6) + (e * 5);
  const cgpa = totalPoints / totalSubjects;

  document.getElementById('result').innerHTML = cgpa.toFixed(2);
}

calculateCGPA();

// Attendance Calculator Script
function calculateAttendance() {
  const attended = parseInt(document.getElementById('attended').value) || 0;
  const total = parseInt(document.getElementById('total').value) || 0;

  const percent = total > 0 ? ((attended / total) * 100).toFixed(1) : 0.0;

  document.querySelector('.attendance-percent').textContent = `${percent}%`;

  let note = 'Enter your class details above.';
  if (total > 0) {
    if (percent >= 80) {
      note = 'Great job! You\'ve reached 80% attendance! 🎉';
    } else {
      const needed = Math.ceil((0.8 * total) - attended);
      note = needed > 0 ? `Attend ${needed} more classes to reach 80%! 📚` : 'You\'re all set!';
    }
  }
  document.getElementById('attendance-note').textContent = note;
}

// Assignment Search
document.getElementById("assignment-search").addEventListener("input", e => {
  renderAssignments(e.target.value);
});

setTimeout(() => {
  renderAssignments();
}, 300);

// Faculty Search
document.getElementById("faculty-search").addEventListener("input", e => {
  renderFaculty(e.target.value);
});

setTimeout(() => {
  renderFaculty();
}, 200);

// Submit Request Form with EmailJS Integration
document.getElementById('requestForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const type = document.getElementById('request-type').value;
  const email = document.getElementById('user-email').value;
  const description = document.getElementById('description').value;
  const facultyName = document.getElementById('faculty-name') ? document.getElementById('faculty-name').value : '';
  const facultyRating = document.getElementById('faculty-rating') ? document.getElementById('faculty-rating').value : '';

  if (!email.endsWith('@saveetha.com')) {
    alert('Email must end with @saveetha.com');
    return;
  }

  // Prepare parameters for EmailJS
  const params = {
    type: type,
    email: email,
    description: description,
    faculty_name: facultyName,
    faculty_rating: facultyRating,
    phone: '7569363309' // Your phone number (hardcoded as requested)
  };

  // Send via EmailJS (replace with your IDs)
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById('form-message').innerHTML = '<p style="color: green;">Request sent successfully to yogeshwaroff@gmail.com! We\'ll review it soon. 🎉</p>';
      document.getElementById('form-message').style.display = 'block';
      this.reset();
      document.getElementById('faculty-fields').style.display = 'none';
    }, (error) => {
      console.log('FAILED...', error);
      document.getElementById('form-message').innerHTML = '<p style="color: red;">Failed to send request. Please try again! 😔</p>';
      document.getElementById('form-message').style.display = 'block';
    });
});

document.getElementById('request-type').addEventListener('change', function() {
  const facultyFields = document.getElementById('faculty-fields');
  if (this.value === 'faculty') {
    facultyFields.style.display = 'block';
  } else {
    facultyFields.style.display = 'none';
  }
});

// Smooth scroll for dashboard links
document.querySelectorAll('.dashboard-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});