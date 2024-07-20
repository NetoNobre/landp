document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var phoneNumber = '5511999999999'; // Substitua pelo número de telefone correto
    var whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Nome:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMensagem:%20${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animação da seção Hero
gsap.from('.hero h2', { 
    duration: 1.5, 
    opacity: 0, 
    y: -50, 
    ease: 'bounce' 
});
gsap.from('.hero p', { 
    duration: 1.5, 
    opacity: 0, 
    y: -50, 
    delay: 0.5, 
    ease: 'power2.out' 
});
gsap.from('.hero .btn', { 
    duration: 1.5, 
    opacity: 0, 
    y: -50, 
    delay: 1, 
    ease: 'power2.out' 
});

// Animação da seção de Serviços
gsap.from('.service-item', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Animação da seção Sobre Nós
gsap.from('.about p', {
    duration: 1.5,
    opacity: 0,
    x: -100,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Animação da seção Avaliações
gsap.from('.review-item', {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.reviews',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});
