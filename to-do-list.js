let button = document.querySelector("button");
    
let list = document.querySelector("ul");

let input = document.querySelector("input");

button.addEventListener("click", addTodo);
    
input.addEventListener("keyup", e => {

    if(e.key == "Enter") {
        addTodo();
    }
    }
);

function updateStatus(selectedTask) {

    let taskName = selectedTask.parentElement.lastElementChild;

    if(selectedTask.checked) {
        taskName.classList.add("checked");
    }
    else {
        taskName.classList.remove("checked");
    }
}

function addTodo() {

    if (input.value == ""){
        alert("there's no task to add");
    }
    else {
    list.innerHTML += `<li>
                            <label>
                                <input  onclick="updateStatus(this)" type="checkbox" >
                                <p> ${input.value}  </p>
                            </label>
                            <button class="delete">Delete</button>
                        </li>`;
    input.value ='';

    var current_tasks = document.querySelectorAll(".delete");

    for(var i=0 ; i<current_tasks.length ; i++){
        current_tasks[i].onclick = function () {
            this.parentNode.remove();
        }
        }
    }


}