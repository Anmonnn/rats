var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mouse.png') {
      myImage.setAttribute ('src','images/rat.jpg');
    } else {
      myImage.setAttribute ('src','images/mouse.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Уведи імя пацюка.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Вітаю в пацючому лігві, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Вітаю в пацючому лігві, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}