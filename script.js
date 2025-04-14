document.addEventListener('DOMContentLoaded', function() {
    // Animation au défilement
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
            }
        });
    }, { threshold: 0.1 });

    // Sélectionner tous les éléments de section pour les animer
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });

    // Ajout de classes sur le navbar lors du défilement
    const navbar = document.querySelector('.navbar');
    const scrollHandler = () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Vérifier l'état initial

    // Gestion du bouton de lecture vidéo
    const videoPreview = document.querySelector('.video-preview');
    if (videoPreview) {
        videoPreview.addEventListener('click', function() {
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/H0GrZiqZQOk?autoplay=1';
            iframe.title = 'Vidéo de présentation';
            iframe.classList.add('w-full');
            iframe.style.aspectRatio = '16/9';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            
            this.innerHTML = '';
            this.appendChild(iframe);
        });
    }

    // Gestion des liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation des cartes et modules
    document.querySelectorAll('.glass-card, .training-card, .module, .testimonial').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 