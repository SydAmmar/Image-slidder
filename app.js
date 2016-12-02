var images = [];
images[0] = "img1.jpg"
images[1] = "img2.jpg"
images[2] = "img3.jpg"
images[3] = "img4.jpg"
images[4] = "img5.jpg"
images[5] = "img6.jpg"
images[6] = "img7.jpg"

for(var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src ="imgaes/" + images[i];
}

var x = 1;
 function slide() {
     var shw = document.getElementById('img');
     shw.src = "images/" + images[x];
     if(x < images.length-1) {
         x++;
     }
     else{
         x = 0;
     }
    }