document.getElementById('add-todo-btn').addEventListener("click", addTask)
function addTask(){
 const list = document.getElementById('todos-list');
 const input = document.getElementById('input-todo');
 const task = input.value;
 
 const todoInput = document.getElementById('input-todo');
 todoInput.value=""; 
  
 const section = document.createElement('section'); 
 section.setAttribute("class","todo");
 
 const todoTextContainer = document.createElement('div'); 
 todoTextContainer.setAttribute("class","todo-text-container");
 section.appendChild(todoTextContainer);
 
 const buttonContainer = document.createElement('div'); 
 buttonContainer.setAttribute("class","btn-container");
 section.appendChild(buttonContainer); 
  
 const check =  document.createElement('button');
 check.setAttribute("class","check-todo-btn");
 todoTextContainer.appendChild(check);
  
 const todoText =  document.createElement('input');
 todoText.classList.add('todo-text');
 todoText.value = task;
 todoText.setAttribute('readonly', 'readonly');
 todoTextContainer.appendChild(todoText); 
  
 check.addEventListener("click", strikethrough);
  function strikethrough(){
    check.classList.toggle('check-todo-btn-checked');
    todoText.classList.toggle('todo-text-disabled');
    }
 
 const deleteTask =  document.createElement('button');
 deleteTask.setAttribute("id","delete-todo-btn");
 buttonContainer.appendChild(deleteTask);
 
 const deleteIcon =  document.createElement('i');
 deleteIcon.setAttribute("class","fal fa-trash fa-lg");
 deleteTask.appendChild(deleteIcon);
  
 const editTask =  document.createElement('button');
 editTask.setAttribute("id","edit-todo-btn");
 buttonContainer.appendChild(editTask);
 
 const editIcon =  document.createElement('i');
 editIcon.setAttribute("class","fal fa-edit fa-lg");
 editTask.appendChild(editIcon);
 
  const confirmEdit =  document.createElement('button');
  confirmEdit.setAttribute("class","confirm-edit-btn");
  confirmEdit.style.display = 'none';
  buttonContainer.appendChild(confirmEdit);
     
  const confirmEditIcon =  document.createElement('i');
  confirmEditIcon.setAttribute("class","fal fa-check-circle fa-lg");
  confirmEdit.appendChild(confirmEditIcon);
  
  editTask.addEventListener("click", edit)
  function edit(){
    editTask.style.display = 'none';
    confirmEdit.style.display = 'flex';
    todoText.removeAttribute("readonly");
    todoText.classList.add('todo-text-selection');
  }
  
  todoText.addEventListener("click", editText)
  function editText(){
    todoText.style.backgroundColor = '#495057';
    
  }
  
  confirmEdit.addEventListener("click", confirm);
  function confirm(){
    todoText.setAttribute("readonly", "readonly");
    todoText.classList.remove("todo-text-selection");
    confirmEdit.style.display = 'none';
    editTask.style.display = 'flex';
   }
 
    
  deleteTask.addEventListener("click", delTask)
  function delTask(){
   section.remove()
  }
  
  list.append(section);
}



