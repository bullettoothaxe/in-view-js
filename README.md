# in-view-js
Module for capturing element in viewport on native Javascript.

**Demo:**
<a href="http://codepen.io/bullet_tooth/pen/XMRNWG" target="_blank">CodePen</a>

**Usage:**

```javascript
import { InViewPort } from 'in-view-js';

let element   = document.getElementById('test'),
    callback  = (isInView) => console.log('is Element visible?', isInView),
    overlapEl = document.getElementById('fixed-top-bar');

let inViewInstance = new InViewPort({
    element,
    callback,
    overlapEl
});

inViewInstance.addListeners();

/* ... */

inViewInstance.removeListeners();
```

**Feature:** Added "overlapEl" for counting overlapping elements (fixed top bars).

Tested with ES6 modules.
