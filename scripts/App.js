/**
 * @author Quentin Misslin
 * 
 * Constructor for Application
 */
function App() {

    this.canvas = new Canvas("#canvas", 0.04);
}

/**
 * Function to start the application once 
 * the page is loaded.
 */
window.onload = function() {

    let app = new App();
    let spritesheet = new Spritesheet([
        './sprites/square/square.json'
    ]);

    spritesheet.endLoading = function() {
        console.log(spritesheet.sprites);
        app.canvas.drawSprite(0, 0, spritesheet.sprites.square0);
    }

    spritesheet.startLoading();
}