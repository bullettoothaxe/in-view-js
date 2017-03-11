# in-view-js
Module for capturing element in viewport

Usage:

```javascript
let element = document.getElementById('test'),
    callback = (isInView) => console.log('is Element visible?', isInView);

let inViewInstance = new InViewPort(element, callback);

inViewInstance.addListeners();

/* ... */

inViewInstance.removeListeners();
```