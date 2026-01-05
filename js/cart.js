// Add to Order button animations
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-to-cart, .btn-order');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add animation class
            this.classList.add('clicked');
            
            // Change text temporarily
            const originalText = this.textContent;
            this.textContent = 'Added!';
            
            // Reset after animation
            setTimeout(() => {
                this.classList.remove('clicked');
                this.textContent = originalText;
            }, 1500);
        });
    });
});