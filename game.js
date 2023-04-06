class Game {

    constructor(config = {}) {
        this.phaserConfig = {
            type: Phaser.AUTO,
            parent: config.id ? config.id : "game",
            width: config.width ? config.width : 800,
            height: config.height ? config.height : 600,
            scene: {
                key: "default",
                init: this.initScene,
                create: this.createScene,
                update: this.updateScene
            }
        };
    }

    async initScene(data) { }
    async createScene() { }
    async updateScene() { }

    async authenticate() { }
    async joinOrCreateGame(id) { }
    async joinGame(id, authId) { }
    async createGame(id, authId) { }

}