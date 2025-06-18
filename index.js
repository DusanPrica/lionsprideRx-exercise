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
});