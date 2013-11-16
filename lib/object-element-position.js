var ObjectElement = require('object-element');

ObjectElement.prototype.defineProperty('pageX', {
  get: function () {
    var rect = this.element.getBoundingClientRect();

    return rect.left + window.pageXOffset;
  }
});

ObjectElement.prototype.defineProperty('pageY', {
  get: function () {
    var rect = this.element.getBoundingClientRect();

    return rect.top + window.pageYOffset;
  }
});
