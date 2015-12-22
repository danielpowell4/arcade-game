//Globally needed variables

var lenX = 101; // width of column
var lenY = 83; // height of row

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

    this.x = this.x + (this.speed * dt); // will need to add in an if statement to handle overruns of the canvas

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(startX, startY) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 2 * lenX;
    this.y = 5 * lenY;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Change the position of the player based on the input key
Player.prototype.update = function() {
  var stepX = 101;
  var stepY = 83;
  switch (this.action) {
    case 'up':
      if (this.y > canvas.boundaries.top) {
        this.y -= stepY;
      }
      break;

    case 'right':
      if (this.x < canvas.boundaries.right) {
        this.x += stepX;
      }
      break;

    case 'down':
      if (this.y < canvas.boundaries.bottom) {
        this.y += stepY;
      }
      break;

    case 'left':
      if (this.x > canvas.boundaries.left) {
        this.x -= stepX;
      }
      break;
  }

  // reset action
  this.action = null;

};

// Get that Input feeding into update
Player.prototype.handleInput = function(e) {
  this.action = e;
};

// Reset the Player

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
