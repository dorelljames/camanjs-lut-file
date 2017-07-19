# CamanJS LUT File Plugin

This is a plugin for [CamanJS](http://camanjs.com) which is a JavaScript library for canvas/image manipulation.
The plugin gives CamanJS ability to apply a [LUT (Lookup Table)](http://www.premiumbeat.com/blog/understanding-luts-in-color-grading/) to a canvas image.

To apply a LUT on your canvas, you just need to pass directly the file location of the LUT file. e.g. (test.CUBE)
`
/lut/test.cube
`

# How to use

* Include `bundle.js` and `caman.lut.js` from `dist` folder in your HTML after including CamanJS' latest bundle.
* Simply use the `lut(lutFile)` function like any other CamanJS filter or plugin.

```javascript
var lutFile = '/lut/test.cube'; // should be accessible in your web server

Caman('#lut-preview', function () {
    this.revert(true); // update the canvas' context
    this.lut(lutFile); // apply LUT
    this.render(); // render back to canvas with ID #lut-preview
});
```

# Other Plugin

[CamanJS LUT Plugin](https://github.com/jverhoelen/camanjs-lut) - This one works with passing an base 64 data from image as an argument.

# Credits

[apply-cube-lut](https://github.com/thibauts/apply-cube-lut) - The `bundle.js` file is a browserified module coming from this awesome work.