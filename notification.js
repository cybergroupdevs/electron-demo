// var path = require('path');
var options = [
  {
    title: "Cool Notification",
    body: "Electron tutorial 1"
  }
]

function doNotify(evt) {
  if (evt.srcElement.id == "basic") {
    new Notification(options[0].title, options[0]);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("basic").addEventListener("click", doNotify);
})
