
BasicGame.Game = function (game) {

};

BasicGame.Game.prototype = {
  preload: function() {
    this.load.image("sea", "assets/sea.png");
    this.load.image("bullet", "assets/bullet.png");
    this.load.spritesheet("greenEnemy", "assets/enemy.png", 32, 32);
  },
  
  create: function () {
    this.sea = this.add.tileSprite(0, 0, 800, 600, 'sea');
    this.enemy = this.add.sprite(400, 200, "greenEnemy");
    this.enemy.anchor.setTo(0.5, 0.5);
    this.physics.enable(this.enemy, Phaser.Physics.ARCADE)
    this.enemy.animations.add("fly", [0, 1, 2], 20, true);
    this.enemy.play("fly");
    this.bullet = this.add.sprite(400, 300, "bullet");
    this.bullet.anchor.setTo(0.5, 0.5);
    this.physics.enable(this.bullet, Phaser.Physics.ARCADE);
    this.bullet.body.velocity.y = -500;
  },

  update: function () {
    //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!
    this.sea.tilePosition.y += 0.2;    
  },
  
  render: function(){
    this.game.debug.body(this.bullet);
    this.game.debug.body(this.enemy);
  },

  quitGame: function (pointer) {

    //  Here you should destroy anything you no longer need.
    //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

    //  Then let's go back to the main menu.
    this.state.start('MainMenu');

  }

};
