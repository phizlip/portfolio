// when the page finishes loading
document.addEventListener('DOMContentLoaded', function() {
    // get the cursor element
    var cursor = document.querySelector('.cursor');
    // get all the curtain elements
    var curtains = Array.from(document.querySelectorAll('.curtain'));
  
    // when the mouse moves
    document.addEventListener('mousemove', function(event) {
      // move the cursor to the mouse position
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    });
  
    // when the mouse button is pressed
    document.body.addEventListener('mousedown', function() {
      // add the 'clicked' class to the cursor
      cursor.classList.add('clicked');
      // add 'mouse-focus' class to the body
      document.body.classList.add('mouse-focus');
    });
  
    // when the mouse button is released
    document.body.addEventListener('mouseup', function() {
      // remove the 'clicked' class from the cursor
      cursor.classList.remove('clicked');
    });
  
    // when a key is pressed
    document.body.addEventListener('keydown', function() {
      // remove 'mouse-focus' class from the body
      document.body.classList.remove('mouse-focus');
    });
  
    // for each curtain
    curtains.forEach(function(curtain, index) {
      // when it gets focus
      curtain.addEventListener('focus', function() {
        // if 'mouse-focus' class is not present on the body, add 'keyboard-focus' class to the curtain
        if (!document.body.classList.contains('mouse-focus')) {
          this.classList.add('keyboard-focus');
        }
      });
  
      // when it loses focus
      curtain.addEventListener('blur', function() {
        // remove 'keyboard-focus' class from the curtain
        this.classList.remove('keyboard-focus');
      });
    });
  });
  