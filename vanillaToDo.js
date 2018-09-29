function addTodo() {
  let toDo = document.createElement("li")
  toDo.className = "list-group-item"
  let toDoText = document.querySelector("#new-todo").value
  if (toDoText.length === 0) {
    return
  }
  toDo.innerHTML = `
    <span class="todo-text">
      ${toDoText}
    </span>
    <div style="display: none;" class="edit-todo">
      <div class="input-group mb-3">
        <input type="text">
        <button id="save-todo" class="btn btn-success" onclick="saveToDo(this)">save ToDo</button>
      </div>
    </div>
    <div class="btn-group btn-group-sm float-right" role="group">
      <button class="btn btn-warning todo-edit" onclick="editToDo(this)">edit</button>
      <button class="btn btn-danger todo-delete" onclick="deleteToDo(this)">delete</button>
    </div>
  `
  document.querySelector("#todos").appendChild(toDo)
  clearInput()
}

function clearInput() {
  document.querySelector("#new-todo").value = ""
}

function deleteToDo(elem) {
  elem.closest("li").remove()
}

function  editToDo(elem) {
  let toDo = elem.closest("li")
  let editToDoTextElement = toDo.querySelector(".edit-todo")
  let toDoTextElement = toDo.querySelector(".todo-text")
  let toDoText = toDoTextElement.innerText
  let buttonElements = toDo.querySelector(".btn-group")
  toDoTextElement.innerText = ""
  editToDoTextElement.style.display = "block"
  buttonElements.style.display = "none"
  toDo.querySelector("input").value = toDoText
}

function saveToDo(elem) {
  let toDo = elem.closest("li")
  let input = toDo.querySelector("input")
  let toDoTextElement = toDo.querySelector(".todo-text")
  let editToDoTextElement = toDo.querySelector(".edit-todo")
  let buttonElements = toDo.querySelector(".btn-group")
  toDoTextElement.innerText = input.value
  input.value = ""
  editToDoTextElement.style.display = "none"
  toDoTextElement.style.display = "inline"
  buttonElements.style.display = "block"
}

document.querySelector("#add-todo").addEventListener("click", addTodo)
