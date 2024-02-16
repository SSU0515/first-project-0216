//mouse curser custom

document.addEventListener("mousemove", (e) => {
  let mouseX = e.pageX + -50;
  let mouseY = e.pageY + -50;

  let cursor = document.querySelector(".cursor");
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

//scroll to jquery

$(".gnb li a, .gototop").click(function (e) {
  $.scrollTo(this.hash || 0, 3000);
  e.preventDefault();
});

//favorite animation

let roller = document.querySelector(".favorite-rolling-list");
roller.id = "roller1";

let clone = roller.cloneNode(true);
clone.id = "roller2";

document.querySelector(".favorite-contents").appendChild(clone);

document.querySelector("#roller1").style.left = "0px";
document.querySelector("#roller2").style.left =
  document.querySelector(".favorite-rolling-list ul").offsetWidth + "px";

roller.classList.add("original");
clone.classList.add("clone");
