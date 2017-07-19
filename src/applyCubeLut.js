var applyCubeLUT = require('apply-cube-lut');
var parseCubeLUT = require('parse-cube-lut');
var ndarrayFromImage  = require('ndarray-from-image');
var canvasFromNdarray = require('canvas-from-ndarray');
var ops = require('ndarray-ops');

module.exports = function applyLutToImage(imageUrl, lutFile, callback) {

    var lutURL = lutFile;
    var imgURL = imageUrl;

    var req = new XMLHttpRequest();
    var img = new Image();

    req.onload = function() {
      img.onload = function() {

        // once both the image and LUT data are loaded
        var lut = parseCubeLUT(req.responseText);
        var arr = ndarrayFromImage(img, 'float32');

        // convert RGBA components to 0.0 -> 1.0
        ops.mulseq(arr, 1.0 / 255.0);

        // apply LUT
        applyCubeLUT(arr /* dest */, arr /* src */, lut);

        // convert back to 0.0 -> 255.0
        ops.mulseq(arr, 255.0);

        // display transformed image
        var canvas = canvasFromNdarray(arr);

        callback(canvas);
      }

      img.crossOrigin='anonymous';
      img.src = imgURL;
    }

    req.open('GET', lutURL, true);
    req.send();

}

