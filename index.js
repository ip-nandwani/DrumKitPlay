let arr = document.querySelectorAll(".drum");
for (let i of arr) {
  i.addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    highlightBox(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  let keyPressed = event.key;
  makeSound(keyPressed);
  highlightBox(keyPressed);
});

function makeSound(e) {
  switch (e) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    // default:
    //   var tom1 = new Audio("./sounds/tom-1.mp3");
    //   var tom2 = new Audio("./sounds/tom-2.mp3");
    //   var tom3 = new Audio("./sounds/tom-3.mp3");
    //   var tom4 = new Audio("./sounds/tom-4.mp3");
    //   var snare = new Audio("./sounds/snare.mp3");
    //   var crash = new Audio("./sounds/crash.mp3");
    //   var kick = new Audio("./sounds/kick-bass.mp3");
    //   tom1.play();
    //   tom2.play();
    //   tom3.play();
    //   tom4.play();
    //   snare.play();
    //   crash.play();
    //   kick.play();
  }
}

function highlightBox(e) {
  let box = document.querySelector("." + e);
  box.classList.add("pressed");
  setTimeout(function () {
    box.classList.remove("pressed");
  }, 100);
}
