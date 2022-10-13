let button=document.querySelector(".button");
let ran=document.querySelector(".Random");

button.onclick=function(){
    let characters="123456789abcdefghijklnmpqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ";
    let characterscount=20;
    let thevalue="";
    for(let i =0;i<characterscount;i++){
        thevalue+= characters[Math.floor(Math.random() * characters.length)]; // Numbers and letters
    //console.log (thevalue+= [Math.floor(Math.random() * characters.length)] ) // Numbers only and the numbers count from chracters length not equal 20 but more
    }
    ran.innerHTML=thevalue;
}