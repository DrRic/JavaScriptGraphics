console.log("arrow");


class RandomArrowheads {
    constructor(canvasId, numArrows) {
      // Get the canvas and context
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext('2d');
  
      // Set the canvas size
      this.canvas.width = 800;
      this.canvas.height = 600;
  
      // Create an offscreen canvas for double buffering
      this.buffer = document.createElement('canvas');
      this.buffer.width = this.canvas.width;
      this.buffer.height = this.canvas.height;
      this.bufCtx = this.buffer.getContext('2d');
  
      // Set the number of arrows to draw
      this.numArrows = numArrows || 3;
  
      // Bind the drawArrowheads function to the class instance
      this.drawArrowheads = this.drawArrowheads.bind(this);
  
    }
  
    // Function to generate a random point within the canvas
    randomPoint() {
      return {
        x: Math.floor(Math.random() * this.canvas.width),
        y: Math.floor(Math.random() * this.canvas.height)
      };
    }
  
    // Function to draw an arrowhead at a given point
    drawArrowhead(ctx, x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 20, y - 20);
      ctx.lineTo(x + 20, y - 20);
      ctx.lineTo(x,  y );
      ctx.stroke();  
    }
  
    // Function to draw the arrowheads on the canvas
    drawArrowheads() {
      // Clear the offscreen buffer
      this.bufCtx.clearRect(0, 0, this.buffer.width, this.buffer.height);
  
      // Draw the specified number of arrowheads on the buffer
      for (let i = 0; i < this.numArrows; i++) {
        const point = this.randomPoint();
        this.drawArrowhead(this.bufCtx, point.x, point.y);
      }
  
      // Draw the buffer on the canvas
      this.ctx.drawImage(this.buffer, 0, 0);
    }
}

function canvas1(){
    console.log("draw arrow");
    arraows = new RandomArrowheads("canvas1",10)
    arraows.drawArrowheads()
  }