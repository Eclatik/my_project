export default class mainScene extends Phaser.Scene {
    constructor(){
        super('mainScene')

        this.ground;
        this.plarforms;
        this.player;
        this.cursor;
    }

    preload() {
        this.load.image ('sky', '/mygame/assets/sky.png')
        this.load.image ('ground', '/mygame/assets/ground.png')
        this.load.image ('plarform', '/mygame/assets/platform.png')
        this.load.spritesheet ('player', '/mygame/assets/player/newbluecars.png', {frameWidth: 32, frameHeight: 32})
    }

    create() {
        this.add.image(400,300,'sky')

        this.ground = this.physics.add.staticGroup()
        this.ground.create(400, 600, 'ground')

        this.plarforms = this.physics.add.staticGroup()
        this.plarforms.create(200, 150, 'plarform')
        this.plarforms.create(50, 500, 'plarform')
        this.plarforms.create(550, 450, 'plarform')
        this.plarforms.create(250, 320, 'plarform')

        this.player = this.physics.add.sprite(100,100,'player')
        this.player.setCollideWorldBounds(true)
        this.player.setBounce(0.2)

        this.cursor = this.input.keyboard.createCursorKeys()



        this.physics.add.collider(this.player, this.plarforms)
        this.physics.add.collider(this.player, this.ground)

    }
    update () {
       if (this.cursor.left.isDown) {
        this.player.setVelocityX(-160)
       } else if(this.cursor.right.isDown) {
        this.player.setVelocityX(160)
       }else{
        this.player.setVelocityX(0)
       }
       if (this.cursor.up.isDown && this.player.body.touching.down){
        this.player.setVelocityY(-330)
       }
    }
}