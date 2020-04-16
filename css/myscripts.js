function Toggleside() {
    var checkbox = document.getElementById("side-toggle")
  var menu = document.getElementById("side-menu")
  var links = document.getElementsByTagName("li")
  if (checkbox.checked == true){
      menu.style.width = "40px"
      menu.style.height = "170px"
      for (var g = 0; g<links.length; g++){
          links[g].style.opacity = "100"
      }
  } else {
     menu.style.width = "0vw"
      menu.style.height = "0vh"
      for (var g = 0; g<links.length; g++){
          links[g].style.opacity = "0"
      }
      
  }
}