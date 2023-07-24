var parent = document.getElementById("parent");
var child1 = document.getElementById("child1");
var child2 = document.getElementById("child2");

parent.addEventListener("click", (event) => {
  alert("parent");
  console.log("click on parents");
});

child1.addEventListener("click", (event) => {
  alert("child1");
  console.log("clicked on child1");
});

child2.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("child2");
  console.log("clicked on child2");
});
