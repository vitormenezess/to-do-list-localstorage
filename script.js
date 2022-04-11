"use strict";
const plus = document.getElementById("plus");

const criarItem = () => {
  //criar elememto no html
  const item = document.createElement("label");
  //add class no elemento
  item.classList.add("todo-item");
  const novoItem = document.getElementById("novoItem");
  if (novoItem.value === "") {
    alert("informe uma tarefa");
  } else {
    item.innerHTML = `<input type="checkbox" />
  <div>${novoItem.value}</div>
  <input
    type="image"
    src="imagens/trash-can-regular.svg"
    width="25"
    height="20"
    alt=""
    id="deletar"
  />`;

    document.getElementById("todoList").appendChild(item);
    novoItem.value = "";
  }
};

plus.addEventListener("click", criarItem);
