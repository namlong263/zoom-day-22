const addBtn = document.querySelector(".add-btn");
const addTaskModal = document.querySelector("#addTaskModal");
const modalClose = document.querySelector(".modal-close");
const cancelBtn = document.querySelector(".btn-secondary");

const formElement = document.querySelector(".todo-app-form");
const taskGrid = document.querySelector(".task-grid");

const inputElement = document.querySelector("#taskTitle");
const descriptionElement = document.querySelector("#taskDescription");
const categoryElement = document.querySelector("#taskCategory");
const priorityElement = document.querySelector("#taskPriority");
const startTimeElement = document.querySelector("#startTime");
const endTimeElement = document.querySelector("#endTime");
const dueDateElement = document.querySelector("#taskDate");
const cardColorElement = document.querySelector("#taskColor");



const todoTasks = [];


addBtn.addEventListener("click", function () {
    addTaskModal.className = "modal-overlay show";
    setTimeout(function () {
        inputElement.focus();
    }, 300);
});

modalClose.addEventListener("click", function () {
    addTaskModal.className = "modal-overlay";
});

cancelBtn.addEventListener("click", function () {
    addTaskModal.className = "modal-overlay";
});


function renderTasks() {

    taskGrid.innerHTML = "";

    // Duyệt qua toàn bộ task
    todoTasks.forEach(function (task) {

        // Tạo card
        const taskCard = document.createElement("div");

        // Thêm class màu
        taskCard.className = `task-card ${task.cardColor}`;

        // Nếu task đã hoàn thành
        if (task.isCompleted) {
            taskCard.classList.add("completed");
        }

        taskCard.innerHTML = `
            <div class="task-header">

                <h3 class="task-title">
                    ${task.title}
                </h3>

                <button class="task-menu">
                    <i class="fa-solid fa-ellipsis fa-icon"></i>
                </button>

            </div>

            <p class="task-description">
                ${task.description}
            </p>

            <div class="task-time">
                ${task.startTime} - ${task.endTime}
            </div>
        `;

        taskGrid.appendChild(taskCard);
    });
}




formElement.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = inputElement.value;
    const description = descriptionElement.value;
    const category = categoryElement.value;
    const priority = priorityElement.value;
    const startTime = startTimeElement.value;
    const endTime = endTimeElement.value;
    const DueDate = dueDateElement.value;
    const cardColor = cardColorElement.value;

    const newTask = {
        title,
        description,
        category,
        priority,
        startTime,
        endTime,
        DueDate,
        cardColor,
        isCompleted: false
    };


    todoTasks.unshift(newTask);

    renderTasks();

    formElement.reset();

    addTaskModal.className = "modal-overlay";
});