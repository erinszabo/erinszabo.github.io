var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
////////////// email copy to clipboard /////////////////

function copyEmail() {
    // Get the text field
    var email = "cohen.erin23@yahoo.com";

    // Copy the text inside the text field
    navigator.clipboard.writeText(email);
    
    // Alert the copied text
    alert("Copied the text: " + email);
  }