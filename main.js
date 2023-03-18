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
      };
    }
  }
};
