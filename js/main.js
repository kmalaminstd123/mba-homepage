// preloader
window.addEventListener('load', ()=> {
    document.querySelector('.preloader').style.display = 'none'
})

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


    // mba slider nested swiper slider
    const mbaNestedFirstSlider = new Swiper('.mba_nest_slider_v1', {
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 4000
        },
        clickable: true,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: "fraction",
        },
    })


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
    document.querySelector('.social-login') && document.querySelector('.social-login').addEventListener('click', function (e) {
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
    document.querySelector('.register-btn') && document.querySelector('.register-btn').addEventListener('click', function (e) {
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

    // about video modal
    const modal = document.getElementById('about_video_modal');
    const videoFrame = document.getElementById('about_modal_video_frame');
    const videoUrl = "https://www.youtube.com/embed/v8cOGXYZt5o?si=15xRgVhn2Fai4Ifl";

    if (modal && videoFrame) {
        // When modal opens → set src
        modal.addEventListener('show.bs.modal', () => {
            videoFrame.src = videoUrl;
        });

        // When modal closes → clear src
        modal.addEventListener('hidden.bs.modal', () => {
            videoFrame.src = "";
        });
    }



    // most popular course swiper
    const mostPopularCourseSwiper = new Swiper('.popular_course_slider', {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768:{
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3,
            }
        },
        effect: "coverflow",
        grabCursor: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    });



});

// Add scroll animations
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const topBar = document.querySelector('.top-bar');
    const mainNav = document.querySelector('.main-nav');

    if (topBar && mainNav) {
        topBar.style.transition = 'all 0.4s linear';

        if (scrolled > 100) {
            topBar.style.transform = 'translateY(-100%)';
            mainNav.style.top = '0';
        } else {
            topBar.style.transform = 'translateY(0)';
            mainNav.style.top = '54px';
        }
    }
});


const select = document.getElementById('programDropdownSelect');

select && select.addEventListener('change', function () {
    const targetTab = document.querySelector(`button[data-bs-target="${this.value}"]`);
    if (targetTab) { 
        new bootstrap.Tab(targetTab).show();
    }
});



// Global Offices JavaScript - Unique Functions
document.addEventListener('DOMContentLoaded', function() {
    // Handle office action button clicks
    const officeActionButtons = document.querySelectorAll('.office-action-btn');
    officeActionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const buttonText = this.textContent.trim();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
            
            if (buttonText.includes('Map')) {
                console.log('Opening map view for office...');
                // Add map functionality here
            } else if (buttonText.includes('Contact')) {
                console.log('Opening contact form for office...');
                // Add contact functionality here
            }
        });
    });
    
    // Animate global stats on scroll
    const globalStatsObserverOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const globalStatsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number-display');
                statNumbers.forEach(stat => {
                    animateGlobalStatNumber(stat);
                });
            }
        });
    }, globalStatsObserverOptions);
    
    const globalStatsSection = document.querySelector('.global-presence-stats');
    if (globalStatsSection) {
        globalStatsObserver.observe(globalStatsSection);
    }
    
    // Animate global stat numbers
    function animateGlobalStatNumber(element) {
        const target = element.textContent;
        
        // Handle different number formats
        if (target.includes('/')) {
            // For "24/7" format
            return;
        }
        
        const number = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/\d/g, '');
        
        if (isNaN(number)) return;
        
        let current = 0;
        const increment = number / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = number + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, 30);
    }
    
    // Office location card hover effects
    const officeLocationCards = document.querySelectorAll('.office-location-card');
    officeLocationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Contact links tracking
    const officeContactLinks = document.querySelectorAll('.contact-link');
    officeContactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const type = this.href.includes('mailto:') ? 'Email' : 'Phone';
            console.log(`Office ${type} contact clicked: ${this.textContent}`);
        });
    });
    
    // Staggered animation for office location cards
    const officeCards = document.querySelectorAll('.office-location-card');
    officeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });

    const heroNavslider = new Swiper('.hero-ban-swiper', {
        autoplay: {
        delay: 4000,
        },
        loop: true,
        slidesPerView: 1,
        direction: 'horizontal'
    });

    

    // mba page swiper slider
    new Swiper('.mba-s-s', {
        loop: true,
        autoplay: {
            delay: 4000
        },
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 50,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});  