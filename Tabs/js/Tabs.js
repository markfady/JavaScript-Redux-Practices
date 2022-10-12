let 
    The_li=document.getElementsByTagName("li"),
    The_paragraphs=document.getElementsByTagName("p"),
       The_liArray=Array.from(The_li),
       The_paragraphsArray=Array.from(The_paragraphs);
        
       The_liArray.forEach((ele)=>{
        ele.addEventListener('click',function(e){    //Each click will refer to another loop on all li items 
            The_liArray.forEach((ele)=>{
                ele.classList.remove("active");    //When click on item other items will lose active class
            });
            e.currentTarget.classList.add("active");           //When click on item the active class will be added 

        let v= document.querySelector(e.currentTarget.dataset.classes);
            console.log(e.currentTarget.dataset.classes);       //Each tab selected 
            console.log(v.innerHTML);                           //return the innerHTML of each custom attribute (dataset.classes)
            let The_Main=document.getElementById("The_Main");   //In the Main paragraph will displayed all data while other paragraphs are hidden
            The_Main.innerHTML=v.innerHTML;
        
        });
    });
