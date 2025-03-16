// Initialize Lucide icons
lucide.createIcons();

function toggleMenu() {
    document.getElementById('dropdown').classList.toggle('show');
}

function showSection(sectionId) {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('courses-content').style.display = 'none';
    document.getElementById(sectionId + '-content').style.display = 'block';
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.closest('.user-menu')) {
        document.getElementById('dropdown').classList.remove('show');
    }
};


//roadmap logic


 
const courses = {
    python: {
        title: "Python Developer",
        progress: "40% Complete",
        levels: [
            { name: "Python Basics", status: "Completed" },
            { name: "Intermediate Python", status: "In Progress" },
            { name: "Data Structures & Algorithms", status: "Locked" },
            { name: "Web Development with Python", status: "Locked" },
            { name: "Python Projects", status: "Locked" }
        ],
        questions: {
            basic: ["What is Python?", "What are Python data types?", "Explain Python lists and tuples."],
            intermediate: ["What is object-oriented programming in Python?", "Explain Python modules and packages."],
            advanced: ["How does garbage collection work in Python?", "What are Python decorators and generators?"]
        }
    },
    javascript: {
        title: "JavaScript Developer",
        progress: "20% Complete",
        levels: [
            { name: "JavaScript Basics", status: "Completed" },
            { name: "Intermediate JavaScript", status: "In Progress" },
            { name: "JavaScript Frameworks", status: "Locked" },
            { name: "Full Stack Development", status: "Locked" },
            { name: "JavaScript Projects", status: "Locked" }
        ],
        questions: {
            basic: ["What is JavaScript?", "Explain let, var, and const.", "What is a closure in JavaScript?"],
            intermediate: ["What is event delegation?", "Explain async and await in JavaScript."],
            advanced: ["How does JavaScript handle memory management?", "Explain JavaScript prototypes."]
        }
    }
    // Add similar details for Java, C, C++, Rust, R, SQL, Go
};

function openCourse(courseKey) {
    const course = courses[courseKey];
    if (!course) {
        alert("Course not found!");
        return;
    }

    let courseContent = `
        <h2>${course.title}</h2>
        <p>${course.progress}</p>
        <ul>
            ${course.levels.map(level => `<li>${level.name} - ${level.status}</li>`).join('')}
        </ul>
        <h3>Basic Questions</h3>
        <ul>${course.questions.basic.map(q => `<li>${q}</li>`).join('')}</ul>
        <h3>Intermediate Questions</h3>
        <ul>${course.questions.intermediate.map(q => `<li>${q}</li>`).join('')}</ul>
        <h3>Advanced Questions</h3>
        <ul>${course.questions.advanced.map(q => `<li>${q}</li>`).join('')}</ul>
    `;

    document.querySelector(".container").innerHTML = courseContent;
}
