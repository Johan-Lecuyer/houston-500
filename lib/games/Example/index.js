import Phaser from 'phaser';
import Game from '../../core/Game';
import scenes from './scenes';

export default class Example extends Game {
  constructor(options) {
    super({
      ...options,
      startScene: 'ClassicScene',
      config: {
        type: Phaser.AUTO,
        parent: options.parent,
        width: 800,
        height: 600,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 300 },
            debug: false,
          },
        },
      },
    });
    this.scenes = {};
    Object.keys(scenes).forEach((name) => {
      const key = name[0].toLowerCase() + name.substring(1);
      this.scenes[key] = new scenes[name](this.core);
      this.core.game.scene.add(this.scenes[key].config.key, this.scenes[key]);
    });
    this.core.game.scene.start(this.core.scenes.loaderScene.config.key);
  }
}
