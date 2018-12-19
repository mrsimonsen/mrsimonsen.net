//navDrop
function navDrop(id1, id2){
  var content = document.getElementById(id1);
  var icon = document.getElementById(id2);
  if(content.className.indexOf("w3-show")== -1){
    content.className += " w3-show";
    icon.className = icon.className.replace(" fa-plus", " fa-minus");
  } else{
    content.className = content.className.replace(" w3-show", "");
    icon.className = icon.className.replace(" fa-minus", " fa-plus");
  }
}
// Side navigation
function w3_open() {
  var x = document.getElementById("mySidebar");
  x.style.width = "100%";
  x.style.fontSize = "40px";
  x.style.paddingTop = "10%";
  x.style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
