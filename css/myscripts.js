function Toggleside() {
  var menu = document.getElementById("side-menu")
  var links = document.getElementsByTagName("li")
  if (menu.style.width == "0vw"){
      menu.style.width = "10vw"
      menu.style.height = "25vh"
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