let accordion=document.getElementsByClassName("Accordion");
var i;
for(i=0;i<accordion.length;i++){    
   accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');   //Add class active from css to html element using (classlist) 
    var paragraph=this.nextElementSibling;  
    if(paragraph.style.maxHeight){          //maxHeight default from css = 0 
        paragraph.style.maxHeight=null;    //null not zero
    }
        else{
            paragraph.style.maxHeight= paragraph.scrollHeight + "px";
        }
});
}