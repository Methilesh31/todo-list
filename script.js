var taskinput = document.getElementById("task-input")
var addtask = document.getElementById("add-task")
var taskcontainer = document.querySelector(".task-container")
var listitem = document.querySelectorAll(".task")
var checktask = document.getElementById("check-button")
var editbutton = document.getElementById("edit-button")



addtask.addEventListener("click",function(event){
    event.preventDefault();
    if(taskinput.value === ""){
        alert("Enter A Task")
    }
    else{
        var div = document.createElement("div")
        div.setAttribute("class" , "tasks")
        div.innerHTML = `<li class="task">${taskinput.value}</li>
                        <div class="icons">
                            <i class='bx bx-trash' id="delete-button" onclick="deletetask(event)"></i>
                        </div>`
        taskcontainer.append(div);
    }
    taskinput.value='';
})


function deletetask(event){
    event.target.parentElement.parentElement.remove();
}
