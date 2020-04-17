function Toggleside() {
    var checkbox = document.getElementById("side-toggle")
  var menu = document.getElementById("side-menu")
  var links = menu.getElementsByTagName("li")
  if (checkbox.checked == true){
      menu.style.width = "40px"
      menu.style.height = "170px"
      for (var g = 0; g < links.length; g++){
          links[g].style.display = "block"
      }
  } else {
     menu.style.width = "0px"
      menu.style.height = "0px"
      for (g = 0; g < links.length; g++){
          links[g].style.display = "none"
      }
      
  }
}