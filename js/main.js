// Mobile menu toggle
function toggleMobileMenu() {
    const navItems = document.getElementById('navItems');
    const toggleBtn = document.querySelector('.mobile-toggle');

    navItems.classList.toggle('show')
    navItems.classList.toggle('fade-in-up')

    if (navItems.classList.contains('show')) {
        
        toggleBtn.classList.remove('fa-times');
        toggleBtn.classList.add('fa-bars');

        setTimeout(() => {
            navItems.classList.remove('fade-out-up');
        }, 600);
    } else {
        
        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-times');

        setTimeout(() => {
            navItems.classList.remove('fade-in-down');
        }, 600);
    }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', function () {
        if (searchInput.value.trim()) {
            // Add fade out animation to search button
            searchBtn.classList.add('fade-out');

            setTimeout(() => {
                alert('Searching for: ' + searchInput.value);
                searchBtn.classList.remove('fade-out');
                searchBtn.classList.add('fade-in');

                setTimeout(() => {
                    searchBtn.classList.remove('fade-in');
                }, 500);
            }, 250);
        }
    });

    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Navigation link active states with animations
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links with fade out
            document.querySelectorAll('.nav-link.active').forEach(activeLink => {
                activeLink.classList.add('fade-out-left');
                setTimeout(() => {
                    activeLink.classList.remove('active', 'fade-out-left');
                }, 300);
            });

            // Add active class to clicked link with fade in
            setTimeout(() => {
                this.classList.add('active', 'fade-in-right');
                setTimeout(() => {
                    this.classList.remove('fade-in-right');
                }, 600);
            }, 300);
        });
    });

    // Social login animation
    document.querySelector('.social-login').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('fade-out');

        setTimeout(() => {
            alert('Redirecting to Facebook login...');
            this.classList.remove('fade-out');
            this.classList.add('fade-in');

            setTimeout(() => {
                this.classList.remove('fade-in');
            }, 500);
        }, 250);
    });

    // Register button animation
    document.querySelector('.register-btn').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('fade-out-right');

        setTimeout(() => {
            alert('Opening registration form...');
            this.classList.remove('fade-out-right');
            this.classList.add('fade-in-left');

            setTimeout(() => {
                this.classList.remove('fade-in-left');
            }, 600);
        }, 300);
    });
});

// Add scroll animations
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const topBar = document.querySelector('.top-bar');
    const mainNav = document.querySelector('.main-nav');

    if (scrolled > 100) {
        topBar.style.transform = 'translateY(-100%)';
        mainNav.style.top = '0';
    } else {
        topBar.style.transform = 'translateY(0)';
        mainNav.style.top = '54px';
    }
});