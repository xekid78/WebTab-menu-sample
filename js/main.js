(function () {
  'use strict';

  var menuItems = document.getElementsByClassName('menu_item');
  var contents = document.getElementsByClassName('content');

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
      e.preventDefault();

      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].className = 'menu_item';
      }

      this.className = 'menu_item active';

      for (i = 0; i < contents.length; i++) {
        contents[i].className = 'content';
      }

      document.getElementById(this.dataset.id).className = 'content active';

      });
    }
})();
