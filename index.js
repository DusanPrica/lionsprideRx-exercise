document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger_menu'); // Ispravljen selector
    const navLinksContainer = document.querySelector('.nav_links_container'); // Ispravljen selector
    const navLinks = document.querySelectorAll('.nav_links_container nav ul li a');

    function toggleMenu() {
        hamburgerMenu.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    }

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (navLinksContainer.classList.contains('active')) {
                toggleMenu();
            }

            if (this.hash !== "") {
                e.preventDefault();

                const hash = this.hash;

                const targetElement = document.querySelector(hash);

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