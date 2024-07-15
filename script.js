var photos = ["image/1.png","image/2.png","image/3.png","image/4.png"];
var imgTag = document.querySelector("img");

count = 0;


function next(){
    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }

}

function previous(){
    count --;
    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}