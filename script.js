// ===========================
// Hero Titles per Role
// ===========================
const heroTitles = {
    all: "Powering the AI revolution through data center energy infrastructure",
    strategy: "Turning market intelligence into decision-grade models for data center power strategy",
    pm: "Leading cross-functional teams from ambiguity to execution on complex infrastructure programs",
    bd: "Building pipeline and driving growth across data center energy markets",
    partnership: "Structuring strategic partnerships that accelerate energy infrastructure deployment",
    sales: "Driving revenue growth through consultative selling and executive relationships",
    investment: "Evaluating and structuring energy investments for hyperscale data centers"
};

// ===========================
// Current filter state
// ===========================
let activeRole = 'all';
let activeIndustry = 'all';

// ===========================
// Filter Logic
// ===========================
const roleFilterContainer = document.getElementById('roleFilter');
const industryFilterContainer = document.getElementById('industryFilter');
const heroTitle = document.getElementById('heroTitle');

function matchesRole(roles, role) {
    return role === 'all' || roles.includes(role) || roles.includes('all');
}

function matchesIndustry(industries, industry) {
    return industry === 'all' || industries.includes(industry) || industries.includes('all');
}

function applyFilters() {
    const role = activeRole;
    const industry = activeIndustry;

    // Update hero title with fade effect
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.textContent = heroTitles[role] || heroTitles.all;
        heroTitle.style.opacity = '1';
    }, 200);

    // Filter timeline items (experience cards)
    document.querySelectorAll('.timeline-item').forEach(item => {
        const roles = item.dataset.roles || '';
        const industries = item.dataset.industries || '';
        if (matchesRole(roles, role) && matchesIndustry(industries, industry)) {
            item.classList.remove('filtered-out');
        } else {
            item.classList.add('filtered-out');
        }
    });

    // Filter individual bullet points
    document.querySelectorAll('.timeline-bullets li').forEach(bullet => {
        const roles = bullet.dataset.roles || '';
        const industries = bullet.dataset.industries || '';
        if (matchesRole(roles, role) && matchesIndustry(industries, industry)) {
            bullet.classList.remove('filtered-out');
        } else {
            bullet.classList.add('filtered-out');
        }
    });

    // Filter project cards
    document.querySelectorAll('.project-card').forEach(card => {
        const roles = card.dataset.roles || '';
        const industries = card.dataset.industries || '';
        if (matchesRole(roles, role) && matchesIndustry(industries, industry)) {
            card.classList.remove('filtered-out');
        } else {
            card.classList.add('filtered-out');
        }
    });

    // Filter skill categories (only by role, not industry)
    document.querySelectorAll('.skill-category').forEach(cat => {
        const roles = cat.dataset.roles || '';
        if (matchesRole(roles, role)) {
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

    roleFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeRole = btn.dataset.role;
    applyFilters();
});

// Industry filter button clicks
industryFilterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    industryFilterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    activeIndustry = btn.dataset.industry;
    applyFilters();
});

// ===========================
// Insights / LinkedIn Posts Filter
// ===========================
const insightsFilterContainer = document.getElementById('insightsFilter');
const insightCards = document.querySelectorAll('.insight-card');

insightsFilterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.insight-filter-btn');
    if (!btn) return;

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
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.scrollY;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 15, 28, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 15, 28, 0.9)';
    }
});

// ===========================
// Contact Form Handler
// ===========================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

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
