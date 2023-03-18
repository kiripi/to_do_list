const pendingNumb = document.querySelector(".pending");

document.querySelector(".task__add").onclick = function () {
  if (document.querySelector(".task__input").value == 0)
    alert("Please write a new task");
  else {
    document.querySelector(".taskboard").innerHTML += `
<div class="assignment">
<span class="assignment__name">
    ${document.querySelector(".task__input").value}
</span>
<button class="task__remove">
-
</button>
</div>
`;

    const taskCurrent = document.querySelectorAll(".task__remove");
    for (let i = 0; i < taskCurrent.length; i++) {
      taskCurrent[i].onclick = function () {
        this.parentNode.remove();
        pendingNumb.textContent -= 1;
      };
    }

    const tasks = document.querySelectorAll(".assignment");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("assignment__completed");
      };
    }

    pendingNumb.textContent = tasks.length;
    document.querySelector(".task__input").value = "";
  }
};

const deleteAllBtn = document.querySelector(".summary__remove-all");
deleteAllBtn.onclick = () => {
  document.querySelector(".taskboard").innerHTML = "";
  pendingNumb.textContent = 0;
};
