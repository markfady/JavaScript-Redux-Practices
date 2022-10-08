var image=document.getElementById('main-image');
var the_modal=document.getElementById('modal');
var secondary=document.getElementById('secondary-image');

image.onclick= function () {   //To show the image 
    secondary.src=this.src;    //Add the src of image to seconday image to make it automatically
    the_modal.style.display = "block";
}
var the_button=document.getElementById('button');       //To hide the image again from close button
the_button.onclick= function(){
    the_modal.style.display="none";
}
document.onkeydown = function(ev){                     //To hide the image again from esc button
    if(ev.keycode="27"){                               //27 is esc button code
        the_modal.style.display="none";
    }
}