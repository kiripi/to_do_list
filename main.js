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
  }
};
