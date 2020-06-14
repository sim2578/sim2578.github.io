
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'bilder/voegel.jpg') {
      myImage.setAttribute ('src','bilder/freiheit.jpg');
    } else {
      myImage.setAttribute ('src','bilder/voegel.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Bitte geben Sie Ihren Namen ein.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Willst Du frei sein, ' + myName + '?';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Willst Du frei sein, ' + storedName + '?';
}
myButton.onclick = function() {
  setUserName();
}
