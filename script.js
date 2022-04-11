"use strict";
const plus = document.getElementById("plus");
const txt = document.getElementById("novoItem");
let banco = [
  { tarefa: "Estudar", status: "" },
  { tarefa: "netflix", status: "checked" },
  { tarefa: "teste", status: "checked" },
];

function criarItem(tarefa, status) {
  //criar elememto no html
  const item = document.createElement("label");
  //add class no elemento
  item.classList.add("todo-item");
  item.innerHTML = `<input type="checkbox" ${status}/>
  <div>${tarefa}</div>
  <input
    type="image"
    src="imagens/trash-can-regular.svg"
    width="25"
    height="20"
    alt=""
    id="deletar"
  />`;

  document.getElementById("todoList").appendChild(item);
}
const limparTarefas = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const atualizarTela = () => {
  limparTarefas();
  banco.forEach((item) => criarItem(item.tarefa, item.status));
};

const inserirItem = (evento) => {
  if (evento.key == "Enter") {
    banco.push({ tarefa: txt.value, status: "" });
    atualizarTela();
    txt.value = "";
  }
  if (evento.type == "click") {
    banco.push({ tarefa: txt.value, status: "" });
    atualizarTela();
    txt.value = "";
  }
  
};

txt.addEventListener("keypress", inserirItem);
plus.addEventListener("click", inserirItem);

atualizarTela();
