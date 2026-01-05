// Main functionality: countdown timer, testimonial carousel, and smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    
    // Countdown Timer
    function initCountdown() {
        const countdown = document.getElementById('countdown');
        if (!countdown) return;
        
        // Set target date (next weekend)
        const now = new Date();
        const nextWeekend = new Date(now);
        nextWeekend.setDate(now.getDate() + (6 - now.getDay()));
        nextWeekend.setHours(23, 59, 59, 999);
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = nextWeekend.getTime() - now;
            
            if (distance < 0) return;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Testimonial Carousel
    function initCarousel() {
        const testimonials = document.querySelectorAll('.testimonial');
        const prevBtn = document.querySelector('.carousel-controls .prev');
        const nextBtn = document.querySelector('.carousel-controls .next');
        
        if (!testimonials.length) return;
        
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonials[index].classList.add('active');
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                showTestimonial(currentIndex);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(currentIndex);
            });
        }
        
        // Auto-rotate every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    // Smooth Scrolling
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
    
    // Initialize all functions
    initCountdown();
    initCarousel();
    initSmoothScrolling();
});