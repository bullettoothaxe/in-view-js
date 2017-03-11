# in-view-js
Module for capturing element in viewport on native Javascript.

Demo:
[CodePen](http://codepen.io/bullet_tooth/pen/XMRNWG)

Usage:

```javascript
let element = document.getElementById('test'),
    callback = (isInView) => console.log('is Element visible?', isInView);

let inViewInstance = new InViewPort(element, callback);

inViewInstance.addListeners();

/* ... */

inViewInstance.removeListeners();
```