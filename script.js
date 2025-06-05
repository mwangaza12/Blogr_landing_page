// Mobile menu toggle functionality
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Smooth scrolling for navigation links
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

// Enhanced button hover effects
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    
    if (mobileNav && mobileNav.style.display === 'block') {
        if (!mobileNav.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileNav.style.display = 'none';
        }
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    const mobileNav = document.getElementById('mobileNav');
    if (window.innerWidth > 768 && mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    
    // Close mobile menu with Escape key
    if (event.key === 'Escape' && mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    }
});

// Add loading animation delay for better UX
window.addEventListener('load', function() {
    // Add a small delay to ensure smooth initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Enhanced dropdown functionality for better accessibility
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        // Add keyboard support
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    dropdownContent.style.display = 'block';
                }
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (header && scrolled < header.offsetHeight) {
        const rate = scrolled * -0.5;
        header.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth transitions for better performance
document.addEventListener('DOMContentLoaded', function() {
    // Preload critical animations
    const criticalElements = document.querySelectorAll('.hero h1, .hero p, .hero-buttons');
    criticalElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
});
