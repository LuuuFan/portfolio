
export const initCanvas = () => {
	// Little Canvas things
	let canvas = document.querySelector("#canvasbg"),
	    ctx = canvas.getContext('2d');

	// Set Canvas to be window size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// Configuration, Play with these
	let config = {
	  particleNumber: 800,
	  maxParticleSize: 10,
	  maxSpeed: 40,
	  colorVariation: 50
	};

	// Colors
	var colorPalette = {
	    bg: {r:255,g:255,b:255,a:0.3},
	    matter: [
	      {r:36,g:18,b:42}, // darkPRPL
	      {r:78,g:36,b:42}, // rockDust
	      {r:252,g:178,b:96}, // solorFlare
	      {r:253,g:238,b:152} // totesASun
	    ]
	};

	// Some Variables hanging out
	var particles = [],
	    centerX = canvas.width / 2,
	    centerY = canvas.height / 2,
	    drawBg,

	// Draws the background for the canvas, because space
	drawBg = function (ctx, color) {
	    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
	    ctx.fillRect(0,0,canvas.width,canvas.height);
	};

	// Particle Constructor
	let Particle = function (x, y) {
	    // X Coordinate
	    this.x = x || Math.round(Math.random() * canvas.width);
	    // Y Coordinate
	    this.y = y || Math.round(Math.random() * canvas.height);
	    // Radius of the space dust
	    this.r = Math.ceil(Math.random() * config.maxParticleSize);
	    // Color of the rock, given some randomness
	    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
	    // Speed of which the rock travels
	    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
	    // Direction the Rock flies
	    this.d = Math.round(Math.random() * 360);
	};

	// Provides some nice color variation
	// Accepts an rgba object
	// returns a modified rgba object or a rgba string if true is passed in for argument 2
	var colorVariation = function (color, returnString) {
	    var r,g,b,a, variation;
	    r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
	    g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
	    b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
	    a = Math.random() + .5;
	    if (returnString) {
	        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	    } else {
	        return {r,g,b,a};
	    }
	};

	// Used to find the rocks next point in space, accounting for speed and direction
	var updateParticleModel = function (p) {
	    var a = 180 - (p.d + 90); // find the 3rd angle
	    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
	    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
	    return p;
	};

	// Just the function that physically draws the particles
	// Physically? sure why not, physically.
	var drawParticle = function (x, y, r, c) {
	    ctx.beginPath();
	    ctx.fillStyle = c;
	    ctx.arc(x, y, r, 0, 2*Math.PI, false);
	    ctx.fill();
	    ctx.closePath();
	};

	// Remove particles that aren't on the canvas
	var cleanUpArray = function () {
	    particles = particles.filter((p) => { 
	      return (p.x > -100 && p.y > -100); 
	    });
	};


	var initParticles = function (numParticles, x, y) {
	    for (let i = 0; i < numParticles; i++) {
	        particles.push(new Particle(x, y));
	    }
	    particles.forEach((p) => {
	        drawParticle(p.x, p.y, p.r, p.c);
	    });
	};

	// That thing
	window.requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	     window.webkitRequestAnimationFrame ||
	     window.mozRequestAnimationFrame ||
	     function(callback) {
	        window.setTimeout(callback, 1000 / 60);
	     };
	})();


	// Our Frame function
	var frame = function () {
	  // Draw background first
	  drawBg(ctx, colorPalette.bg);
	  // Update Particle models to new position
	  particles.map((p) => {
	    return updateParticleModel(p);
	  });
	  // Draw em'
	  particles.forEach((p) => {
	      drawParticle(p.x, p.y, p.r, p.c);
	  });
	  // Play the same song? Ok!
	  window.requestAnimFrame(frame);
	};

	// Click listener
	document.body.addEventListener("click", function (event) {
	    var x = event.clientX,
	        y = event.clientY;
	    cleanUpArray();
	    initParticles(config.particleNumber, x, y);
	});

	// First Frame
	frame();

	// First particle explosion
	initParticles(config.particleNumber);
}

export const initLineParticles = () => {
	particlesJS('canvasbg',
	  {
	    "particles": {
	      "number": {
	        "value": 80,
	        "density": {
	          "enable": true,
	          "value_area": 800
	        }
	      },
	      "color": {
	        "value": "#a7bfe8"
	      },
	      "shape": {
	        "type": "circle",
	        "stroke": {
	          "width": 0,
	          "color": "#a7bfe8"
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
	        "value": 5,
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
	        "color": "#a7bfe8",
	        "opacity": 0.4,
	        "width": 1
	      },
	      "move": {
	        "enable": true,
	        "speed": 6,
	        "direction": "none",
	        "random": false,
	        "straight": false,
	        "out_mode": "out",
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
	          "mode": "repulse"
	        },
	        "onclick": {
	          "enable": true,
	          "mode": "push"
	        },
	        "resize": true
	      },
	      "modes": {
	        "grab": {
	          "distance": 400,
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
	          "distance": 200
	        },
	        "push": {
	          "particles_nb": 4
	        },
	        "remove": {
	          "particles_nb": 2
	        }
	      }
	    },
	    "retina_detect": true,
	    "config_demo": {
	      "hide_card": false,
	      "background_color": "#b61924",
	      "background_image": "",
	      "background_position": "50% 50%",
	      "background_repeat": "no-repeat",
	      "background_size": "cover"
	    }
	  }
	);
}