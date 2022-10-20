let The_input=document.querySelector(".input");
let The_add=document.querySelector(".add");
let The_tasks=document.querySelector(".tasks");

The_add.onclick=function() {
    if(The_input.value!==""){           //If there is data in the field
        arrayOfTasks(The_input.value);  //Add tasks to array
        The_input.value="";             //After taking value from field go to reset the field
    }
}
    //Empty Array to store the Tasks
    let Data=[];
    //Check if there are Data in localStorage 
    if(localStorage.getItem("tasks")){      //if there are data in local storage the array will equal them
        
        Data=JSON.parse(localStorage.getItem("tasks"));  //save in array the old data in localstorage
    }
        //Delete item
        //first we delete task from the div
        The_tasks.addEventListener("click",(e)=>{
            if(e.target.classList.contains("del")){
                //Remove Task from local storage    
                delteTasksfromLocalStorage(e.target.parentElement.getAttribute("data-id"));
                e.target.parentElement.remove();
            }
            if(e.target.classList.contains("task")){  
                togglestatus(e.target.getAttribute("data-id")) //function to update local storage
                e.target.classList.toggle("done");    //When pressing on task will be marked as done
            }
        });

    //Implementation arrayOfTasks Function
        function arrayOfTasks(text){
            const task={
                id:Date.now(),      //This data used to differentiate between each new div
                data:text,          
                completed:false,
            };
            //Add tasks to array
            Data.push(task);
            addTaskstoPage(Data);          //Function to Display the tasks into the page 
            //Add tasks to localstorage
            AddTaskstoLocalStorage(Data);  //Function to save data in local storage 
            console.log(Data);
            console.log(JSON.stringify(Data)); 
        }


        function addTaskstoPage(The_Data){  //Takes Data From array and print it inside the main page   //The_Data refers to array data(line22)

            The_tasks.innerHTML="";
            The_Data.forEach((task)=>{ 
                //Create Task div inside (tasks) div
                let div=document.createElement("div");
                div.className="task";
                div.setAttribute("data-id",task.id);    //This attribute used to differentiate between each new div
                //Add data inside div
                div.appendChild(document.createTextNode(task.data)); //data from (line17)
                The_tasks.appendChild(div);
                //Create Delete button to each div
                let span=document.createElement("span");
                span.className="del";
                //Add Delete button to div
                span.appendChild(document.createTextNode("Delete")); 
                div.appendChild(span);
            })
        }
        function   AddTaskstoLocalStorage(The_Data){        //Takes Data From array and put it inside localstorage
            window.localStorage.setItem("tasks",JSON.stringify(The_Data));
        }

        function   GetTasksfromLocalStorage(){        //Takes Data From array and put it inside localstorage
            let saveddata =   window.localStorage.getItem("tasks");
            if(saveddata){          //If there are data in localstorage
                let tasks=JSON.parse(saveddata);
                addTaskstoPage(tasks);      //Display those saved items to the page
            }
        }
        GetTasksfromLocalStorage();

        function delteTasksfromLocalStorage(taskId){
        Data=Data.filter((task)=> task.id !=taskId);
        AddTaskstoLocalStorage(Data);       //When the user press on delete button the LocalStorage
                                            // will be updated with the new array (which is removed from div after pressing the delete button too)
        }   
        function togglestatus(taskId){
            for(let i=0; i<Data.length; i++){        //If the selected item id equals to id inside the array 
                if(Data[i].id == taskId) {            //Toggle it's status
                Data[i].completed == false ? (Data[i].completed=true)  : (Data[i].completed=false);
                }
            }
            AddTaskstoLocalStorage(Data); //Updating the localstorage for toggling for completed true or false.
        }   