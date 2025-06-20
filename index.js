document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const navLinksContainer = document.querySelector('.nav_links_container');
    const navLinks = document.querySelectorAll('.nav_links_container nav ul li a');

    function toggleMenu() {
        if (hamburgerMenu) {
            hamburgerMenu.classList.toggle('active');
        }
        if (navLinksContainer) {
            navLinksContainer.classList.toggle('active');
        }
    }

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (navLinksContainer && navLinksContainer.classList.contains('active')) {
                toggleMenu();
            }
            if (this.hash !== "") {
                e.preventDefault();
                const targetElement = document.querySelector(this.hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');
    const viewLabelLinks = document.querySelectorAll('.view-label');

    if (viewLabelLinks) {
        viewLabelLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const imageUrl = this.getAttribute('href');
                modalImage.src = imageUrl;
                modal.style.display = 'flex';
            });
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Slideshow 
    let slideIndex = 1;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function showSlides(n) {
        let i;
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active'); 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex - 1].classList.add('active'); 
        dots[slideIndex - 1].classList.add('active');
    }

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    showSlides(slideIndex);
});