# applyCubeLUT

To compile, run `yarn` or `npm install` then run the following command below:

```
browserify applyCubeLut.js --standalone applyLutToImage > bundle.js
```

You can use the `bundle.js` and have access to `applyLutToImage` function which takes an image source, a lutfile and returns the image processed with the given lut in a canvas.