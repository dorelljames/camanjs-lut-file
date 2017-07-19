Caman.Plugin.register("lut", function(lutFile) {
    var canvas = this.canvas;
    var ctx = canvas.toDataURL();

    applyLutToImage(ctx, lutFile, function(canvas) {
        console.log(ctx == canvas);
        this.replaceCanvas(canvas);
    }.bind(this));
});

Caman.Filter.register("lut", function() {
    this.processPlugin("lut", arguments);
});