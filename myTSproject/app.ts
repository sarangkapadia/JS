const button = document.querySelector('button');

function onbuttonclick(): void {
   console.log('clicked');
}

if (button !== null) {
   button.addEventListener('click', onbuttonclick);
}