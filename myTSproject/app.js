"use strict";
var button = document.querySelector('button');
function onbuttonclick() {
    console.log('clicked');
}
if (button !== null) {
    button.addEventListener('click', onbuttonclick);
}
