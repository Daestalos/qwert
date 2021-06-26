
function myFunction() {
    var x = document.getElementById("HeaderNav");
    if (x.className === "Header__Content") {
      x.className += " responsive";
    } else {
      x.className = "Header__Content";
    }
  }