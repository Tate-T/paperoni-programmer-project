// const Controller = function() {

//   this.left  = new Controller.ButtonInput();
//   this.right = new Controller.ButtonInput();
//   this.up    = new Controller.ButtonInput();

//   this.keyDownUp = function(type, key_code) {

//     var down = (type == "keydown") ? true : false;
//     event.preventDefault()
//     switch(key_code) {

//       case 37: this.left.getInput(down);  break;
//       case 38: this.up.getInput(down);    break;
//       case 39: this.right.getInput(down);

//     }

//   };

// };

// Controller.prototype = {

//   constructor : Controller

// };

// Controller.ButtonInput = function() {

//   this.active = this.down = false;

// };

// Controller.ButtonInput.prototype = {

//   constructor : Controller.ButtonInput,

//   getInput : function(down) {

//     if (this.down != down) this.active = down;
//     this.down = down;

//   }

// };


// const Display = function(canvas) {

//   this.buffer  = document.createElement("canvas").getContext("2d"),
//   this.context = canvas.getContext("2d");

//   this.drawRectangle = function(x, y, width, height, color) {

//     this.buffer.fillStyle = color;
//     this.buffer.fillRect(Math.floor(x), Math.floor(y), width, height);

//   };

//   this.fill = function(color) {

//     this.buffer.fillStyle = color;
//     this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);

//   };

//   this.render = function() { this.context.drawImage(this.buffer.canvas, 0, 0, this.buffer.canvas.width, this.buffer.canvas.height, 0, 0, this.context.canvas.width, this.context.canvas.height); };

//   this.resize = function(width, height, height_width_ratio) {

//     if (height / width > height_width_ratio) {

//       this.context.canvas.height = width * height_width_ratio;
//       this.context.canvas.width = width;

//     } else {

//       this.context.canvas.height = height;
//       this.context.canvas.width = height / height_width_ratio;

//     }

//     this.context.imageSmoothingEnabled = false;

//   };

// };

// Display.prototype = {

//   constructor : Display

// };

// const Engine = function(time_step, update, render) {

//   this.accumulated_time        = 0;
//   this.animation_frame_request = undefined,
//   this.time                    = undefined,
//   this.time_step               = time_step,

//   this.updated = false;

//   this.update = update;
//   this.render = render;

//   this.run = function(time_stamp) {

//     this.accumulated_time += time_stamp - this.time;
//     this.time = time_stamp;

//     if (this.accumulated_time >= this.time_step * 3) {

//       this.accumulated_time = this.time_step;

//     }


//     while(this.accumulated_time >= this.time_step) {

//       this.accumulated_time -= this.time_step;

//       this.update(time_stamp);

//       this.updated = true;

//     }


//     if (this.updated) {

//       this.updated = false;
//       this.render(time_stamp);

//     }

//     this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

//   };

//   this.handleRun = (time_step) => { this.run(time_step); };

// };

// Engine.prototype = {

//   constructor:Engine,

//   start:function() {

//     this.accumulated_time = this.time_step;
//     this.time = window.performance.now();
//     this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

//   },

//   stop:function() { window.cancelAnimationFrame(this.animation_frame_request); }

// };

// const Game = function() {

//     this.world = {
  
//       background_color:"rgba(40,48,56,0.25)",
  
//       friction:0.9,
//       gravity:3,
  
//       player:new Game.Player(),
  
//       height:45,
//       width:56,
  
//       collideObject:function(object) {
  
//         if (object.x < 0) { object.x = 0; object.velocity_x = 0; }
//         else if (object.x + object.width > this.width) { object.x = this.width - object.width; object.velocity_x = 0; }
//         if (object.y < 0) { object.y = 0; object.velocity_y = 0; }
//         else if (object.y + object.height > this.height) { object.jumping = false; object.y = this.height - object.height; object.velocity_y = 0; }
  
//       },
  
//       update:function() {
  
//         this.player.velocity_y += this.gravity;
//         this.player.update();
  
//         this.player.velocity_x *= this.friction;
//         this.player.velocity_y *= this.friction;
  
//         this.collideObject(this.player);
  
//       }
  
//     };
  
//     this.update = function() {
  
//       this.world.update();
  
//     };
  
//   };
  
//   Game.prototype = { constructor : Game };
  
//   Game.Player = function(x, y) {
  
//     this.color      = "#ff0000";
//     this.height     = 10;
//     this.jumping    = true;
//     this.velocity_x = 0;
//     this.velocity_y = 0;
//     this.width      = 10;
//     this.x          = 100;
//     this.y          = 50;
  
//   };
  
//   Game.Player.prototype = {
  
//     constructor : Game.Player,
  
//     jump:function() {
  
//       if (!this.jumping) {
  
//         this.color = "#" + Math.floor(Math.random() * 16777216).toString(16);
//         if (this.color.length != 7) {
  
//           this.color = this.color.slice(0, 1) + "0" + this.color.slice(1, 6);
  
//         }
  
//         this.jumping     = true;
//         this.velocity_y -= 20;
  
//       }
  
//     },
  
//     moveLeft:function()  { this.velocity_x -= 0.5; },
//     moveRight:function() { this.velocity_x += 0.5; },
  
//     update:function() {
  
//       this.x += this.velocity_x;
//       this.y += this.velocity_y;
  
//     }
  
//   };

// window.addEventListener("load", function(event) {

//   "use strict";

//   var keyDownUp = function(event) {

//     controller.keyDownUp(event.type, event.keyCode);

//   };

//   var resize = function(event) {

//     display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
//     display.render();

//   };

//   var render = function() {

//     display.fill(game.world.background_color);
//     display.drawRectangle(game.world.player.x, game.world.player.y, game.world.player.width, game.world.player.height, game.world.player.color);
//     display.render();

//   };

//   var update = function() {

//     if (controller.left.active)  { game.world.player.moveLeft();  }
//     if (controller.right.active) { game.world.player.moveRight(); }
//     if (controller.up.active)    { game.world.player.jump(); controller.up.active = false; }

//     game.update();

//   };


//   var controller = new Controller();
//   var display    = new Display(document.querySelector("canvas"));
//   var game       = new Game();
//   var engine     = new Engine(1000/30, render, update);


//   display.buffer.canvas.height = game.world.height;
//   display.buffer.canvas.width = game.world.width;

//   window.addEventListener("keydown", keyDownUp);
//   window.addEventListener("keyup",   keyDownUp);
//   window.addEventListener("resize",  resize);

//   resize();

//   engine.start();

// });