particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#444444", "#888888", "#CCCCCC"] // Adjust the array of gray colors
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 8, // Adjust the size of particles
        random: true,
        anim: {
          enable: false
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "bounce",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: false,
          mode: "push"
        },
        resize: true
      }
    },
    retina_detect: true
  });
  