function openCity(yolName) {
  var i;
  var x = document.getElementsByClassName("yol");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(yolName).style = "";
  
}
