// Elementos del DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

// Cargar tareas desde localStorage al iniciar
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();


// Añadir nueva tarea
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const newTask = {
    id: Date.now(),
    text,             //si pones text,es una abreviacion de text:text,ademas aqui text en el valor que  tiene la constante
    completed: false
  };

  tasks.push(newTask);
  updateStorage();  //Actualiza el LocalStorage
  renderTasks();    //Muestras la tarea en pantalla (DOM) sino no sale
  taskInput.value = "";
});


// Marcar como completada o no
taskList.addEventListener("change", (e) => {
  if (e.target.matches("input[type='checkbox']")) {
    const taskId = Number(e.target.dataset.id);
    tasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: e.target.checked } : task
    );
    updateStorage();
    renderTasks();
  }
});

// Eliminar tareas completadas
clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed);
  updateStorage();
  renderTasks();
});

// Guardar en localStorage
function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));//stringify es para transformar a string ya que localStorage solo permite strings
}

// Mostrar tareas en la lista
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = task.id;
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) span.classList.add("completed");

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);
  });
}
