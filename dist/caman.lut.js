Caman.Plugin.register("lut", function(lutFile) {
    var canvas = this.canvas;
    var ctx = canvas.getContext('2d');

    applyLutToImage(canvas.toDataURL(), lutFile, function(canvasReturned) {
        ctx.drawImage(canvasReturned, 0, 0);
        this.replaceCanvas(canvas);
    }.bind(this));
});

Caman.Filter.register("lut", function() {
    this.processPlugin("lut", arguments);
});