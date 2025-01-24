const scoreEl = document.querySelector('#scoreEl');
const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const gameIconContainer = document.getElementById('gameIconContainer'); 
const spaceBox = document.querySelector('.space-box'); 
const gameOverScreen = document.querySelector('.game-over');
const tryAgainButton = document.querySelector('.try-again');

function showGameOverScreen() {
  gameOverScreen.classList.add('active');
}

function restartGame() {
  projectiles.length = 0;
  grids.length = 0;
  invaderProjectiles.length = 0;
  particles.length = 0; 

  
  for (let i = 0; i < 100; i++) {
    particles.push(
      new Particle({
        position: {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
        },
        velocity: {
          x: 0,
          y: 0.3,
        },
        radius: Math.random() * 2,
        color: 'white',
      })
    );
  }


  player.position = {
    x: canvas.width / 2 - player.width / 2,
    y: canvas.height - player.height - 20,
  };
  player.opacity = 1;

  game.over = false;
  game.active = true;
  score = 0;
  scoreEl.innerHTML = score;

  gameOverScreen.classList.remove('active');


  grids.push(new Grid());

  animate(); 
}

tryAgainButton.addEventListener('click', restartGame);


function checkGameOver() {
  if (game.over) {
    setTimeout(showGameOverScreen, 1000);
  }
}

let gameStarted = false; 


class Player {
  constructor() {
    this.velocity = { x: 0, y: 0 };
    this.rotation = 0;
    this.opacity = 1;
    const image = new Image();
    image.src = '../../space-assets/spaceship.png';
    image.onload = () => {
      const scale = 0.15;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity;
    c.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );
    c.rotate(this.rotation);
    c.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    );
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    c.restore();
  }

  update() {
    if (this.image) {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }
}


class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 4;
  }

  draw() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = 'red';
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class Particle {
  constructor({ position, velocity, radius, color, fades }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
    this.opacity = 1;
    this.fades = fades;
  }

  draw() {
    c.save();
    c.globalAlpha = this.opacity;
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.fades) this.opacity -= 0.01;
  }
}

class InvaderProjectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 3;
    this.height = 10;
  }

  draw() {
    c.fillStyle = 'white';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}


class Invader {
  constructor({ position }) {
    this.velocity = { x: 0, y: 0 };
    const image = new Image();
    image.src = '../../space-assets/invader.png';
    image.onload = () => {
      const scale = 1;
      this.image = image;
      this.width = image.width * scale;
      this.height = image.height * scale;
      this.position = {
        x: position.x,
        y: position.y,
      };
    };
  }

  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update({ velocity }) {
    if (this.image) {
      this.draw();
      this.position.x += velocity.x;
      this.position.y += velocity.y;
    }
  }
  shoot(invaderProjectiles) {
    invaderProjectiles.push(
      new InvaderProjectile({
        position: {
          x: this.position.x + this.width / 2,
          y: this.position.y + this.height,
        },
        velocity: {
          x: 0,
          y: 5,
        },
      })
    );
  }
}

class Grid {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 3, y: 0 };
    this.invaders = [];
    const columns = Math.floor(Math.random() * 10 + 5);
    const rows = Math.floor(Math.random() * 5 + 2);
    this.width = columns * 30;
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        this.invaders.push(
          new Invader({
            position: {
              x: x * 30,
              y: y * 30,
            },
          })
        );
      }
    }
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.y = 0;
    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.velocity.x = -this.velocity.x;
      this.velocity.y = 30;
    }
  }
}


const player = new Player();
const projectiles = [];
const grids = [];
const invaderProjectiles = [];
const particles = [];


const keys = {
  a: { pressed: false },
  d: { pressed: false },
  space: { pressed: false },
};

let frames = 0;
let randomInterval = Math.floor(Math.random() * 500 + 500);
let game = {
  over: false,
  active: true,
};
let score = 0;
for (let i = 0; i < 100; i++) {
  particles.push(
    new Particle({
      position: {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
      },
      velocity: {
        x: 0,
        y: 0.3,
      },
      radius: Math.random() * 2,
      color: 'white',
    })
  );
}

function createParticles({ object, color, fades }) {
  for (let i = 0; i < 15; i++) {
    particles.push(
      new Particle({
        position: {
          x: object.position.x + object.width / 2,
          y: object.position.y + object.height / 2,
        },
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
        radius: Math.random() * 3,
        color: color || '#BAA0DE',
        fades: true,
      })
    );
  }
}


function animate() {
  if (!game.active) return;
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height); 

  player.update();
  particles.forEach((particle, i) => {
    if (particle.position.y - particle.radius >= canvas.height) {
      particle.position.x = Math.random() * canvas.width;
      particle.position.y = -particle.radius;
    }
    if (particle.opacity <= 0) {
      setTimeout(() => {
        particles.splice(i, 1);
      }, 0);
    } else {
      particle.update();
    }
  });
  const playerHitSound = document.getElementById('playerHitSound');
  invaderProjectiles.forEach((invaderProjectile, index) => {
    if (
      invaderProjectile.position.y + invaderProjectile.height >=
      canvas.height
    ) {
    } else invaderProjectile.update();
    if (
      invaderProjectile.position.y + invaderProjectile.height >=
        player.position.y &&
      invaderProjectile.position.y <= player.position.y + player.height && 
      invaderProjectile.position.x + invaderProjectile.width >=
        player.position.x &&
      invaderProjectile.position.x <= player.position.x + player.width
    ) {
      playerHitSound.play(); 
      console.log('you lose');
      setTimeout(() => {
        invaderProjectiles.splice(index, 1);
        player.opacity = 0;
        game.over = true;
        checkGameOver();
      }, 0);
      setTimeout(() => {
        game.active = false;
      }, 2000);

      createParticles({
        object: player,
        color: 'white',
        fades: true,
      });
    }
  });
 
  projectiles.forEach((projectile, index) => {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    } else {
      projectile.update();
    }
  });
  const invaderShootSound = document.getElementById('invaderShootSound');

  grids.forEach((grid, gridIndex) => {
    grid.update();
    if (frames % 100 === 0 && grid.invaders.length > 0) {
      grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(
        invaderProjectiles
      );
      invaderShootSound.play(); 
    }
    grid.invaders.forEach((invader, i) => {
      invader.update({ velocity: grid.velocity });

      const hitSound = document.getElementById('hitSound');

      projectiles.forEach((projectile, index) => {
        grids.forEach((grid, gridIndex) => {
          grid.invaders.forEach((invader, i) => {
            if (
              projectile.position.y - projectile.radius <=
                invader.position.y + invader.height &&
              projectile.position.y + projectile.radius >= invader.position.y &&
              projectile.position.x + projectile.radius >= invader.position.x &&
              projectile.position.x - projectile.radius <=
                invader.position.x + invader.width
            ) {
              hitSound.play(); 
              setTimeout(() => {
                
                const invaderFound = grid.invaders.find(
                  invader2 => invader2 === invader
                );
                const projectileFound = projectiles.find(
                  projectile2 => projectile2 === projectile
                );
                if (invaderFound && projectileFound) {
                  score += 100;
                  scoreEl.innerHTML = score;
                  createParticles({ object: invader, fades: true });
                  grid.invaders.splice(i, 1);
                  projectiles.splice(index, 1);

                 
                  if (grid.invaders.length === 0) {
                   
                    grids.splice(gridIndex, 1);
                  }
                }
              }, 0);
            }
          });
        });
      });
    });
  });

 
  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -5;
    player.rotation = -0.15;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 5;
    player.rotation = 0.15;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
  }

  if (frames % randomInterval === 0) {
    grids.push(new Grid());
    frames = 0;
    randomInterval = Math.floor(Math.random() * 500 + 500);
  }

  frames++;
}
const startSound = document.getElementById('startSound');
const backgroundMusic = document.getElementById('backgroundMusic');

startButton.addEventListener('click', () => {
 
   startSound.play();
  backgroundMusic.play();

  gameStarted = true;
  startButton.style.display = 'none';
  gameIconContainer.style.display = 'none'; 
  spaceBox.style.display = 'none'; 
  canvas.style.display = 'block';
  document.body.classList.add('game-started'); 
  animate(); 
});

const shootSound = document.getElementById('shootSound');
let canShoot = true; 
addEventListener('keydown', ({ key }) => {
  if (!gameStarted) return; 
  if (game.over) return;

  if (key === 'w' && canShoot) {
    canShoot = false; 

 
    projectiles.push(
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: {
          x: 0,
          y: -10,
        },
      })
    );
    shootSound.play(); 
  }


  if (key === 'a') {
    keys.a.pressed = true;
  }
  if (key === 'd') {
    keys.d.pressed = true;
  }
});

addEventListener('keyup', ({ key }) => {
  if (!gameStarted) return; 
  if (game.over) return; 

  if (key === 'w') {
    canShoot = true; 
  }


  if (key === 'a') {
    keys.a.pressed = false;
  }
  if (key === 'd') {
    keys.d.pressed = false;
  }
});
