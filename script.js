/*js use strict*/
function validation() {
  alert("Bedankt voor het downloaden!")
}

var deButton = document.getElementById("googleplay");

deButton.addEventListener("click", ietsDoen);

function ietsDoen(){
    deButton.classList.add("tel");
}