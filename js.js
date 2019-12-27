function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

let log = document.getElementById("login_circle");
let modal = document.getElementById("containerVisible");


//OPEN MODAL
function login() {
  modal.style.visibility = "visible";
}
log.addEventListener("click", login);

//CLOSE MODAL
document.getElementById("popup_close").addEventListener("click", function() {
  document.getElementById("containerVisible").style.visibility = "hidden";
});

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("containerVisible").style.visibility = "hidden";
});