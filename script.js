/*js use strict*/
/*melding simpel*/
function validation() {
  alert("Bedankt voor het downloaden!")
}
/*eind melding simpel*/

var popup = document.querySelector(".popup");
var download = document.querySelector("#nudownloaden");
var kruis = document.querySelector("#kruis");

function togglePopup() {
    popup.classList.add("showpopup")
}

download.addEventListener('click', togglePopup)

function toggleSluitpopup() {
    popup.classList.remove("showpopup")
}

kruis.addEventListener('click', toggleSluitpopup)
