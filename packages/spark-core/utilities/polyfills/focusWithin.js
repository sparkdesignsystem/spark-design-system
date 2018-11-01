/* eslint-disable */
(function(window, document){
  'use strict';
  var slice = [].slice;
  var removeClass = function(elem){
    elem.classList.remove('sprk-u-FocusWithin');
  };
  var update = (function(){
    var running, last;
    var action = function(){
      var element = document.activeElement;
      running = false;
      if(last !== element){
        last = element;
        slice.call(document.getElementsByClassName('sprk-u-FocusWithin')).forEach(removeClass);
        while(element && element.classList){
          element.classList.add('sprk-u-FocusWithin');
          element = element.parentNode;
        }
      }
    };
    return function(){
      if(!running){
        requestAnimationFrame(action);
        running = true;
      }
    };
  })();
  document.addEventListener('focus', update, true);
  document.addEventListener('blur', update, true);
  update();
})(window, document);
/* eslint-enable */

