let i = 0;
let images=["images/Portfolio6.jpg" ,"images/Portfolio7.jpg" , "images/Portfolio8.jpg"]; //array of images
function slideShow(){
    document.slideShow.src=images[i]  //access image tag using name from html   , add image using js by (.src)
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }

setTimeout(slideShow,2000);  //to make delay setTimeout (name of function , time for delay)
}
slideShow();