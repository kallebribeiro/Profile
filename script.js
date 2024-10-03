document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Animação nas várias secções com ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animação dos cards (skills)
  gsap.from(".card, .skills h2", {
    scrollTrigger: {
      trigger: ".skills",
      start: "top 80%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    y: 100,  
    duration: 1.5,
    stagger: 0.2 
  });

  // Animação progressiva no texto da secção 'Sobre Mim'
  gsap.from(".by-me-image, .by-me p, .by-me h2", {
    scrollTrigger: {
      trigger: ".by-me",
      start: "top 75%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    x: 50,
    duration: 1.5,
    stagger: 0.2
  });

  // Animação progressiva no subtítulo e na lista de informações adicionais
  gsap.from(".by-me h3", {
    scrollTrigger: {
      trigger: ".by-me",
      start: "top 70%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    y: 50,
    duration: 1.5
  });

  gsap.from(".by-me .info-list li", {
    scrollTrigger: {
      trigger: ".by-me",
      start: "top 60%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    y: 30,
    duration: 1.5,
    stagger: 0.2
  });

  // Efeito parallax no título da secção 'Sobre Mim'
  gsap.to(".by-me h2", {
    scrollTrigger: {
      trigger: ".by-me",
      start: "top bottom",
      scrub: true
    },
    y: -50,
    ease: "none"
  });

  // Animações nas outras secções

 // Animação dos projetos
gsap.from(".swiper-slide", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "play none none reset", // Reativa ao subir
  },
  scale: 0.9,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".projects", // Define o .projects como gatilho
    start: "top 80%", // Inicia a animação quando 80% da seção estiver visível
    toggleActions: "play none none reset", // Reativa ao subir
  }
})
.from(".projects h2", {
  opacity: 0,  // Começa invisível
  y: -50,      // Começa deslocado no eixo Y (para cima)
  duration: 0.5, // Duração da animação
  ease: "power2.out" // Suaviza a animação
})
.set(".border-vertical", { height: 0 }) // Define a altura inicial
.fromTo(".border-vertical", {
  height: 0,  // Começa em altura zero
}, {
  height: "100%",  // Aumenta a altura até 100%
  duration: 1.7,   // Duração da animação
  ease: "power2.out" // Suaviza a animação
}, "-=0.2") // Começa ligeiramente antes do final da animação do h2
.set(".border-horizontal", { width: 0 }) // Define a largura inicial
.fromTo(".border-horizontal", {
  width: 0, // Começa em largura zero
}, {
  width: "100%",  // Aumenta a largura até 100%
  duration: 2,  // Duração da animação
  ease: "power2.out" // Suaviza a animação
}, "-=0.9"); // Sincroniza com a animação da borda vertical

  // Experiência
  gsap.from(".experience .timeline-item", {
    scrollTrigger: {
      trigger: ".experience",
      start: "top 80%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    x: -100,
    opacity: 0,
    stagger: 0.3,
    duration: 1
  });

  // Testemunhos
  gsap.from(".testimonial", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1
  });

  // Formulário de contacto
  gsap.from(".contact form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    opacity: 0,
    duration: 1
  });

  // Ícones sociais
  gsap.from(".social-icons a", {
    scrollTrigger: {
      trigger: ".social-icons",
      start: "top 80%",
      toggleActions: "play none none reset", // Reativa ao subir
    },
    scale: 0.8,
    opacity: 0,
    stagger: 0.2,
    duration: 1
  });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Recolhe os dados do formulário
  const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
  };

  // Envia o email utilizando o EmailJS
  emailjs.send("service_yxg2xbm","template_h1piq12", templateParams)
      .then(function(response) {
         alert('Mensagem enviada com sucesso!', response.status, response.text);
      }, function(error) {
         alert('Falha ao enviar a mensagem...', error);
      });
});
