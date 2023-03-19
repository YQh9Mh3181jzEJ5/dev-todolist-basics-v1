const button = document.querySelector("#add-button");
button.addEventListener("click", () => {
  const input = document.querySelector("#new-todo");

  const li = document.createElement("li");
  li.innerText = input.value;

  const doneButton = document.createElement("button");
  doneButton.innerText = "done";
  li.appendChild(doneButton);
  doneButton.addEventListener("click", () => {
    const li = doneButton.closest("li");
    li.classList.add("done");
  });

  const ul = document.querySelector("ul");
  ul.appendChild(li);
});
