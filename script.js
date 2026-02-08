// ===========================
// Hero Titles per Role
// ===========================
const heroTitles = {
    all: "Powering the AI revolution through data center energy infrastructure",
    pm: "Leading cross-functional teams from ambiguity to execution on complex infrastructure programs",
    bd: "Building strategic partnerships that accelerate data center energy deployment",
    investment: "Evaluating and structuring energy investments for hyperscale data centers",
    strategy: "Turning market intelligence into decision-grade models for data center power strategy"
};

// ===========================
// Role Filter Logic
// ===========================
const roleFilterContainer = document.getElementById('roleFilter');
const heroTitle = document.getElementById('heroTitle');

// All filterable elements across sections
function getFilterableItems() {
    return {
        timelineItems: document.querySelectorAll('.timeline-item'),
        timelineBullets: document.querySelectorAll('.timeline-bullets li'),
        projectCards: document.querySelectorAll('.project-card'),
        skillCategories: document.querySelectorAll('.skill-category'),
    };
}

function applyRoleFilter(role) {
    const { timelineItems, timelineBullets, projectCards, skillCategories } = getFilterableItems();

    // Update hero title with fade effect
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.textContent = heroTitles[role] || heroTitles.all;
        heroTitle.style.opacity = '1';
    }, 200);

    // Filter timeline items (experience cards)
    timelineItems.forEach(item => {
        const roles = item.dataset.roles || '';
        if (role === 'all' || roles.includes(role)) {
            item.classList.remove('filtered-out');
        } else {
            item.classList.add('filtered-out');
        }
    });

    // Filter individual bullet points within visible timeline items
    timelineBullets.forEach(bullet => {
        const roles = bullet.dataset.roles || '';
        if (role === 'all' || roles.includes(role) || roles.includes('all')) {
            bullet.classList.remove('filtered-out');
        } else {
            bullet.classList.add('filtered-out');
        }
    });

    // Filter project cards
    projectCards.forEach(card => {
        const roles = card.dataset.roles || '';
        if (role === 'all' || roles.includes(role)) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });

    // Filter skill categories
    skillCategories.forEach(cat => {
        const roles = cat.dataset.roles || '';
        if (role === 'all' || roles.includes(role) || roles.includes('all')) {
            cat.classList.remove('filtered-out');
        } else {
            cat.classList.add('filtered-out');
        }
    });
}

// Role filter button clicks
roleFilterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Update active state
    roleFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Apply filter
    const role = btn.dataset.role;
    applyRoleFilter(role);
});

// ===========================
// Insights / LinkedIn Posts Filter
// ===========================
const insightsFilterContainer = document.getElementById('insightsFilter');
const insightCards = document.querySelectorAll('.insight-card');

insightsFilterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.insight-filter-btn');
    if (!btn) return;

    // Update active state
    insightsFilterContainer.querySelectorAll('.insight-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const theme = btn.dataset.theme;

    insightCards.forEach(card => {
        const themes = card.dataset.themes || '';
        if (theme === 'all' || themes.includes(theme)) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('open');
    }
});

// ===========================
// Navbar scroll effect
// ===========================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 15, 28, 0.9)';
    }

    lastScroll = currentScroll;
});

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Show a simple confirmation (replace with real form handler later)
    const btn = contactForm.querySelector('.btn-submit');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.style.background = '#10b981';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        contactForm.reset();
    }, 3000);
});

// ===========================
// Resume Download Handler
// ===========================
document.getElementById('downloadResume').addEventListener('click', (e) => {
    e.preventDefault();
    // Placeholder: In production, link to an actual PDF
    alert('Resume download: Replace this with a link to your actual resume PDF.\n\nTo set this up, add your resume file (e.g., resume.pdf) to this project folder and update the link in index.html.');
});

// ===========================
// Smooth scroll for nav links (fallback)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
