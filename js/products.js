// Product Filtering Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    const loadMoreBtn = document.querySelector('.load-more-btn');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            productItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Load more functionality (placeholder)
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Placeholder for load more functionality
            alert('Load more products functionality would be implemented here!');
        });
    }

    // Add to cart functionality
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productName = this.closest('.product-item').querySelector('h3').textContent;
            
            // Add visual feedback
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.background = '#4caf50';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '#d4af37';
            }, 2000);
            
            // You can add actual cart functionality here
            console.log(`Added ${productName} to cart`);
        });
    });

    // Quick view functionality
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const productPrice = productItem.querySelector('.price').textContent;
            const productDescription = productItem.querySelector('p').textContent;
            
            // Simple modal alert (you can replace with a proper modal)
            alert(`Quick View:\n\n${productName}\nPrice: ${productPrice}\n\n${productDescription}`);
        });
    });

    // Smooth scrolling for product navigation
    const productLinks = document.querySelectorAll('a[href="#products"]');
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});