class Player extends Phaser.Scene {
    constructor(){
        super("PlayerScene");
    }

    create(){
        this.add.text(20,20, "Rocket Patrol Play");
    }
}