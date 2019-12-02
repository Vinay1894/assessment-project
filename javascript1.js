var imageSources = ["url('6.jpg')","url('7.jpg')", "url('8.jpg')","url('9.jpg')","url('10.jpg')","url('11.jpg')","url('12.jpg')"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("main2").style.backgroundImage = imageSources[index];
  index++;
} , 3000);
