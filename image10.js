const image01src = 'url("image01.jpg")';
const image02src = 'url("image02.jpg")';
const image03src = 'url("image03.jpg")';
const image04src = 'url("image04.jpg")';
const image05src = 'url("image05.jpg")';

function nextImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    header.style.backgroundImage = image02src;
  } else if (nowBg == image02src) {
    header.style.backgroundImage = image03src;
  } else if (nowBg == image03src) {
    header.style.backgroundImage = image04src;
  } else if (nowBg == image04src) {
    header.style.backgroundImage = image05src;
  } else {
    header.style.backgroundImage = image01src;
  }
}

function prevImage() {
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if (nowBg == image01src) {
    header.style.backgroundImage = image05src;
  } else if (nowBg == image02src) {
    header.style.backgroundImage = image01src;
  } else if (nowBg == image03src) {
    header.style.backgroundImage = image02src;
  } else if (nowBg == image04src) {
    header.style.backgroundImage = image03src;
  } else {
    header.style.backgroundImage = image04src;
  }
}

document.getElementById('top').style.backgroundImage = image01src;
document.getElementById('sc-to-left').addEventListener('click', prevImage);
document.getElementById('sc-to-right').addEventListener('click', nextImage);

/* function changeimage() {
  var i = Math.floor((Math.random() * 3));
  document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
} */

setInterval(nextImage, 5000); 


var f = function(num1, num2, num3) {
  1 + 2 + 3;
};
var a = f();
console.log(a);


/* window.onload = function () {
   var backgroundImg=
     [
     "image01.jpg", "image02.jpg", "image03.jpg", "image04.jpg", "image05.jpg"
     ]

   setInterval(changeimage, 5000);

   function changeimage() {
     var i = Math.floor((Math.random() * 3));
     document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
   }
} */

/* var counter = 0;

function slideimage(){
  if(counter >= (setImage.length-1)){
      counter = 0;
  }
  document.getElementById("slideshow").style.backgroundImage = "url("+setImage[counter] + ")";
  counter++;
}

setInterval("slideimage()", 5000); */
