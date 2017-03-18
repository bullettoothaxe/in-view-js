"use strict";

export class InViewPort {
  constructor($args = {}) {
    this.el          = $args.element;
    this.callback    = $args.callback;
    this.overlapEl   = $args.overlapEl;
    this.old_visible = null;
    this.handler     = ::this.onVisibilityChange;
    this.topDistance = this.getTopDistance();
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
  getTopDistance() {
    let overlapHeight = this.overlapEl ? this.overlapEl.getBoundingClientRect().height : 0,
        elHeight = this.el.getBoundingClientRect().height || this.el.firstChild.getBoundingClientRect().height;

    return overlapHeight ? (overlapHeight - elHeight) : 0;
  }

  isElementInViewport() {
    let rect = this.el.getBoundingClientRect();

    return (
      rect.top >= this.topDistance &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}