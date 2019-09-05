/**
 * @author Quentin Misslin
 * 
 * Constructor for Color element.
 * 
 * @param {Number} r Red value
 * @param {Number} g Green value
 * @param {Number} b Blue value
 * @param {Number} a Alpha value
 */
function Color(r, g, b, a) {

    // Set attributes
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 1;

    if (r != null && g != null && b != null) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    if (a != null) {
        this.a = a;
    }
}

/**
 * Method to set random color
 */
Color.prototype.rand = function() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.a = 1;
}

/**
 * Method to stringify color in rgba() format 
 */
Color.prototype.str = function() {
    return "rgba(" + this.r + "," + this.g + "," +
        this.b + "," + this.a + ")";
}