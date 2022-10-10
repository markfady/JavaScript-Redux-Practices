let The_button=document.getElementById("button");

window.onscroll=function(){
    if(this.scrollY>=1200){          //The value of scrolling to make the button appears
        The_button.classList.add("show");
        The_button.addEventListener('click',function() {         //Setup action of clicking to the button
        window.scrollTo({                                       //After clicking the page will return to top 0%
            top:0 ,
            behavior:"smooth",
        });
    });
    }
    else{
        The_button.classList.remove("show");                   
    }

}