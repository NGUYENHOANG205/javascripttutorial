//selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//Event listeners
//todoButton.addEventListener("click", addTodo, true);
todoList.addEventListener("click", deleteCheck, true);
//filterOption.addEventListener("click", filterTodo, true)
//Functions
function addTodo(){
    event.preventDefault();
//todo DIV
//comment
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');
//create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//Checked Button
const completedButton = document.createElement('button');
console.log(completedButton);
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add("completed-button");
todoDiv.appendChild(completedButton);
//trash Button
const trashButton = document.createElement('button');
trashButton.innerHTML = '<i class="fas fa-trash"></i>'; 
trashButton.classList.add("trash-button");
todoDiv.appendChild(trashButton);
//Append to list
todoList.appendChild(todoDiv);
//Clear Todo Input Value
todoInput.value="";
}

function deleteCheck(event){
    const item = event.target;
    //DELETE
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('trash-animation');
        todo.addEventListener("transitionend", function(){
            todo.remove();
        })
    }
    //CHECKED
    if(item.classList[0] === 'completed-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
//Filter
function filterTodo(e){
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = 'none';
                };
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else{
                    todo.style.display = 'none';
                };
                break;
            default :
                break
            }
        });
}