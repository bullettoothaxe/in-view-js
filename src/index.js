"use strict";

export default class InViewPort {
  constructor(el, callback) {
    this.el           = el;
    this.callback     = callback;
    this.old_visible  = null;
    this.handler      = ::this.onVisibilityChange;
  }

  addListeners() {
    addEventListener('DOMContentLoaded', this.handler, false);
    addEventListener('load',   this.handler, false);
    addEventListener('scroll', this.handler, false);
    addEventListener('resize', this.handler, false);
  }

  removeListeners() {
    removeEventListener('DOMContentLoaded', this.handler, false);
    removeEventListener('load',   this.handler, false);
    removeEventListener('scroll', this.handler, false);
    removeEventListener('resize', this.handler, false);
  }

  onVisibilityChange() {
    let visible = this.isElementInViewport();

    if (visible != this.old_visible) {
      this.old_visible = visible;

      if (typeof this.callback === 'function') {
        this.callback(this.old_visible);
      }
    }
  }

  isElementInViewport() {
    let rect = this.el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}