const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const gameIconContainer = document.getElementById('gameIconContainer'); // Контейнер іконки та назви гри
const spaceBox = document.querySelector('.space-box'); // Знайдемо space-box

let gameStarted = false; // Прапор для перевірки, чи почалася гра

// Клас для гравця
class Player {
  constructor() {
    this.velocity = { x: 0, y: 0 };
    this.rotation = 0;
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

// Клас для снарядів
class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 3;
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

// Клас для ворогів
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
}

// Клас для сітки ворогів
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
    this.velocity.y = 0
    if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
      this.velocity.x = -this.velocity.x;
      this.velocity.y = 30
    }
  }
}

// Створення об'єктів
const player = new Player();
const projectiles = [];
const grids = [new Grid()];

// Стан клавіш
const keys = {
  a: { pressed: false },
  d: { pressed: false },
  space: { pressed: false },
};

// Анімація гри
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height); // Чорний фон

  player.update();

  // Обробка снарядів
  projectiles.forEach((projectile, index) => {
    if (projectile.position.y + projectile.radius <= 0) {
      setTimeout(() => {
        projectiles.splice(index, 1);
      }, 0);
    } else {
      projectile.update();
    }
  });

  // Оновлення ворогів у кожній сітці
  grids.forEach(grid => {
    grid.update();
    grid.invaders.forEach(invader => {
      invader.update({ velocity: grid.velocity });
    });
  });

  // Управління рухом гравця
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
}

// Подія на кнопку старт
startButton.addEventListener('click', () => {
  gameStarted = true;
  startButton.style.display = 'none'; // Сховати кнопку після натискання
  gameIconContainer.style.display = 'none'; // Сховати іконку гри
  spaceBox.style.display = 'none'; // Сховати space-box
  canvas.style.display = 'block'; // Показати канвас
  document.body.classList.add('game-started'); // Додаємо клас для старту гри
  animate(); // Запуск анімації
});

// Обробка натискання клавіш
addEventListener('keydown', ({ key }) => {
  if (!gameStarted) return; // Якщо гра не почалась, не обробляємо натискання

  switch (key) {
    case 'a':
      keys.a.pressed = true;
      break;
    case 'd':
      keys.d.pressed = true;
      break;
    case 'w':
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
      break;
  }
});

addEventListener('keyup', ({ key }) => {
  if (!gameStarted) return; // Якщо гра не почалась, не обробляємо відпускання

  switch (key) {
    case 'a':
      keys.a.pressed = false;
      break;
    case 'd':
      keys.d.pressed = false;
      break;
  }
});
