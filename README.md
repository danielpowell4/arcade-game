Princess vs Bug Arcade Game
===============================

This game represents the pinnacle of the online gaming experience. A strong woman, alone in the wild, must navigate through a slew of nasty stink bugs on her way to safety at the shore.

Unfortunately, there is no boat. Thus she is driven to bring strands of grass individually to the shore in hopes that she will be able to dry them out, mix some mud and forge a vessel to enable her escape to America, a mystical land--perhaps less dangerous for she, so privileged.

This small game was built in javascript leveraging a simple HTML5 canvas.

Play it here
==============================
(http://danielpowell4.github.io/arcade-game/)

app.js
==============================

app.js contains most of the relevant code. Enemy objects are created first as a fold. As they leave the viewport of the canvas, they are reset and randomly assigned to one of the 4 rows at a starting x value just off screen.

The player is controlled with the arrows on a keyboard with a step driven switch case statement that is bundled with if statements, creating the boundaries.

When a collision is sensed, the player is reset to the starting position.

engine.js
==============================
Was supplied in large part by udacity's awesome team--as this project was created in pursuit of a frontend nanodegree.

It contains the canvas, which it appends to index.html

It also contains a time tracker to ensure the game plays at a consistent speed across devices.

It then goes on to create the game's background and bring in relevant image resources (like the bug/princess.png files).

resources.js
==============================
Resources.js is simply an image loading utility. It eases the process of loading image files so that they can be used within your game. It also includes a simple caching so that images load quicker as they move and are regenerated.


Rubric
==============================
Students should use this [rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2696458597/m-2687128535) for self-checking their submission.
