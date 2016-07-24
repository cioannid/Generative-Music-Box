function View(canvas) {
	this.canvas = canvas;
	this.clicks = [];
	this.frameRate = 1000 / 30;
}

View.prototype.handleClick = function(event) {
	var view = this;
	var x = event.offsetX;
	var y = event.offsetY;
	var pos = view.clicks.push({x: x, y: y, radius: 100});
	console.log("Add a circle at", x, ", ", y);
};

View.prototype.updateDisplay = function() {
	var view = this;
	var context = view.canvas.getContext("2d");
	context.clearRect(0, 0, view.canvas.width, view.canvas.height);
	context.fillStyle = 'black';
	context.fillRect(0, 0, view.canvas.width, view.canvas.height);

	for (var i = 0; i < view.clicks.length; i++) {
		view.drawCircle(context, view.clicks[i].x, view.clicks[i].y, view.clicks[i].radius, 1);	
	}
};

View.prototype.drawCircle = function(context, x, y, radius, alpha) {
	context.beginPath();
	context.arc(x, y, radius, 0, 2 * Math.PI);
	context.fillStyle = "rgba(" + x % 256 + ", " + y % 256 + ", " + (x * y % 256) + " ," + alpha + ")";
	context.fill();
};