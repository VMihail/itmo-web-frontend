"use strict";

function highlightMenu(element) {
    var menuItems = document.getElementsByTagName('a');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('active');
    }
    element.classList.add('active');
}

