// Enemies the player must avoid
var Enemy = function(startX, startY) {
    this.sprite = 'images/enemy-bug.png';
    this.height = 67;
    this.width = 75;
    this.startXpos = -101;
    this.x = startX;
    this.y = startY;
    this.speed = Math.floor((Math.random() * 100) + 200); // speed  between 100 and 300
};

Enemy.prototype.update = function(dt) {

    this.x = this.x + (this.speed * dt);

    if (this.x > 530) {
        this.reset();
    }

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function() {
    this.x = this.startXpos;
    this.yPositions = [61, 144, 226, 312];
    this.y = this.yPositions[Math.floor(Math.random() * this.yPositions.length)];
    this.speed = Math.floor((Math.random() * 132) + 132);
};

// Our story's protagonist
var Player = function(startX, startY) {
    this.sprite = 'images/char-princess-girl.png';
    this.height = 76;
    this.width = 70;
    this.posStartY = 395;
    this.x = 202;
    this.y = this.posStartY;
    this.boundaries = {
      "top" : 0,
      "right" : 400,
      "bottom" : 390,
      "left" : 0,
    };
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(keyCode) {
    var stepX = 101;
    var stepY = 83;

    switch (this.action) {
        case 'up':
            if (this.y > this.boundaries.top) {
                this.y -= stepY;
            }
            break;

        case 'right':
            if (this.x < this.boundaries.right) {
                this.x += stepX;
            }
            break;

        case 'down':
            if (this.y < this.boundaries.bottom) {
                this.y += stepY;
            }
            break;

        case 'left':
            if (this.x > this.boundaries.left) {
                this.x -= stepX;
            }
            break;
    }

    // reset action
    this.action = null;

    // reset if on water
    if (this.y < 50) {
        this.reset();
    }

    // detect collisions
    for (var enemy in allEnemies) {
        if (player.x < allEnemies[enemy].x + allEnemies[enemy].width &&
            player.x + player.width > allEnemies[enemy].x &&
            player.y < allEnemies[enemy].y + allEnemies[enemy].height &&
            player.height + player.y > allEnemies[enemy].y
        ) {
            this.reset();
        }
    }
};

  //  allEnemies.forEach(function(enemy) {
  //      if (player.x < allEnemies[enemy].x + allEnemies[enemy].width &&
  //          player.x + player.width > allEnemies[enemy].x &&
  //          player.y < allEnemies[enemy].y + allEnemies[enemy].height &&
  //          player.height + player.y > allEnemies[enemy].y
  //      ) {
  //          this.reset();
  //      }
  //  });
// };

Player.prototype.handleInput = function(e) {
    this.action = e;
};

Player.prototype.reset = function() {
    this.x = 202;
    this.y = this.posStartY;
};

// Release the enemies!!!
var allEnemies = [];

for (i = 0; i < 6; i++) {
    var startY = Math.floor(Math.random() * 250) + 61;
    allEnemies.push(new Enemy(this.startXpos, startY));
}

// Have the Playter begin their quest
var player = new Player();


// This is the controller for the keyboard... Player.prototype.update uses it to make player move
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
