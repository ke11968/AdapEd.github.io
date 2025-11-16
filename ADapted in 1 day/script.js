// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Course Filtering
function filterCourses() {
    const typeFilter = document.getElementById('courseTypeFilter');
    const levelFilter = document.getElementById('courseLevelFilter');
    
    if (!typeFilter || !levelFilter) return;
    
    const typeValue = typeFilter.value;
    const levelValue = levelFilter.value;
    const courses = document.querySelectorAll('.course-card');

    courses.forEach(course => {
        const courseType = course.dataset.type;
        const courseLevel = course.dataset.level;

        const typeMatch = typeValue === 'all' || courseType === typeValue;
        const levelMatch = levelValue === 'all' || courseLevel === levelValue;

        if (typeMatch && levelMatch) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// FAQ Toggle
function toggleFaq(element) {
    element.classList.toggle('active');
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
