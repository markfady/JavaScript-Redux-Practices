let items=document.getElementsByTagName("li");
let items_Array=Array.from(items);          //for.Each works with array
let imgs=Array.from(document.images);       //storing all images in one array


items_Array.forEach((ele) => {      //first loop to add click for each li 
    ele.addEventListener("click",function(){ 
        items_Array.forEach((ele)=>{        //second loop to remove class when li clicked on
            ele.classList.remove('active');
            ele.addEventListener('click',hideimages);
                    //after clicking the category
                    // hide all images,After this the specific images will appear by using dataset
        })
        ele.classList.add('active');    //add the class after click on the item
        
        });
});

//Images
    function hideimages() {
        imgs.forEach((ele) => {  //loop on each image to hide them all 
            ele.style.display="none";
            });
            document.querySelectorAll(this.dataset.classes).forEach((ele)=>{  
                ele.style.display="inline";
            });
    }



