//Globally needed variables

// Enemies the player must avoid
var Enemy = function(startX, startY) {
    this.sprite = 'images/enemy-bug.png';
    this.x = startX;
    this.y = startY;
    this.speed = Math.floor((Math.random() * 100) + 200); // speed  between 100 and 300
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + (this.speed * dt);

    if (this.x > 530) {
      this.reset();
    };

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function () {
  this.x = -101;
  this.y = Math.floor(Math.random() * 400);
  this.speed = Math.floor((Math.random() * 100) + 200);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(startX, startY) {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 415;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Change the position of the player based on the input key
Player.prototype.update = function(keyCode) {
  var stepX = 101;
  var stepY = 83;

  switch (this.action) {
    case 'up':
      if (this.y > 0) {
        this.y -= stepY;
      }
      break;

    case 'right':
      if (this.x < 400) {
        this.x += stepX;
      }
      break;

    case 'down':
      if (this.y < 400) {
        this.y += stepY;
      }
      break;

    case 'left':
      if (this.x > 0) {
        this.x -= stepX;
      }
      break;
  }

  // reset action
  this.action = null;

  // reset if on water should go
};

// Get that handleInput method
Player.prototype.handleInput = function(e) {
  this.action = e;
};

// Reset the Player

Player.prototype.reset = function() {
  this.x = 202;
  this.y = 415;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [];

for (i = 0; i < 6; i++) {
  var startX = -101;
  var startY = Math.floor(Math.random() * 400)
  allEnemies.push(new Enemy(startX, startY));
}

// Place the player object in a variable called player

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
