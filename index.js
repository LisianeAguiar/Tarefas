var btnEvent = document.getElementById("btn");

function addHeader() {
  
  var newHeader = document.getElementById("firstHeader");
  newHeader.innerHTML = "Hello World!";
}

btnEvent.addEventListener("click", addHeader);

var sndBtnEvent = document.getElementById("sndBtn");

function showText() {

  var inputValue = document.getElementById("inputText").value;
  document.getElementById("sndHeader").innerHTML = inputValue;
  
}

sndBtnEvent.addEventListener("click",showText);
