/**
 * @author Quentin Misslin
 * 
 * Constructor for Canvas element.
 * 
 * @param {String} selector Selector of canvas
 * @param {Number} factor Factor for pixel size in canvas
 */
function Canvas(selector, factor) {

    // Init attributes
    this.dom = document.querySelector(selector);
    this.ctx = this.dom.getContext("2d");

    // Disable pixel smooth
    this.ctx['imageSmoothingEnabled'] = false; /* standard */
    this.ctx['mozImageSmoothingEnabled'] = false; /* Firefox */
    this.ctx['oImageSmoothingEnabled'] = false; /* Opera */
    this.ctx['webkitImageSmoothingEnabled'] = false; /* Safari */
    this.ctx['msImageSmoothingEnabled'] = false; /* IE */
    this.dom.style =
        "image-rendering: optimizeSpeed;" +
        "image-rendering: -moz-crisp-edges;" +
        "image-rendering: -webkit-optimize-contrast;" +
        "image-rendering: -o-crisp-edges;" +
        "image-rendering: pixelated;" +
        "-ms-interpolation-mode: nearest-neighbor;";

    // Real size, factored size and factor
    this.size = { X: 0, Y: 0, x: 0, y: 0, factor: factor };

    // Init event listener
    let that = this;
    window.addEventListener("resize", function() { that.resize(); });

    // Init attributes
    this.resize();
}


/**
 * Method called to init and update size of canvas
 */
Canvas.prototype.resize = function() {
    this.size.X = this.dom.offsetWidth;
    this.size.Y = this.dom.offsetHeight;
    this.size.x = this.size.X * this.size.factor;
    this.size.y = this.size.Y * this.size.factor;
    this.dom.setAttribute('width', this.size.x);
    this.dom.setAttribute('height', this.size.y);
}

/**
 * Method to print pixel
 * @param {Number} x X coordinate for pixel
 * @param {Number} y Y coordinate for pixel
 * @param {Color} color Color of pixel
 */
Canvas.prototype.set = function(x, y, color) {
    x = x / this.size.X * this.size.x;
    y = y / this.size.Y * this.size.y;
    this.ctx.fillStyle = color.str();
    this.ctx.fillRect(x, y, 1, 1);
}

/**
 * Method to clear all canvas
 */
Canvas.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.size.x, this.size.y);
}

/**
 * Method to draw sprite in canvas
 * @param {Number} x X coordinate for sprite
 * @param {Number} y Y coordinate for sprite
 * @param {Sprite} sprite Sprite object
 */
Canvas.prototype.drawSprite = function(x, y, sprite) {

    this.ctx.drawImage(
        sprite.image,
        sprite.x, sprite.y,
        sprite.w, sprite.h,
        x, y,
        sprite.w, sprite.h,
    );
}