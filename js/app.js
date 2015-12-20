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
var player = function(startX, startY) {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 2 * lenX;
    this.y = 5 * lenY;
};


player.prototype.update = function(dt) {
  // Will need to be able to handle a reset after y is <= 0, also scoring if desired
};

// Draw the player on the screen, required method for game
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Change the position of the player based on the input key
player.update.handleInput = function(key) {

  switch (key) {
    case 'left':
      //move left
      break;
    case 'up':
      // move Up
      break;
    case 'right':
      // move Right
      break;
    case 'down':
      //move Down
      break;
    default:

  }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
