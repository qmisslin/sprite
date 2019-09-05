/**
 * App constructor
 */
function App() {

    // Init all references and attributes
    let that = this;
    this.dom = {
        canvas: document.querySelector("#canvas"),
    };

    // Init event listener
    window.addEventListener("resize", function() { that.resize(); });

    // Init 
    this.size = {};
    this.resize();
}


/**
 * Method called to init and update size of canvas
 */
App.prototype.resize = function() {
    this.size.x = this.dom.canvas.offsetWidth;
    this.size.y = this.dom.canvas.offsetHeight;
}

/**
 * Function to start application
 */
window.onload = function() {
    let app = new App();
}