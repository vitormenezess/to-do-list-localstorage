"use strict";
const plus = document.getElementById("plus");
const txt = document.getElementById("novoItem");

const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setBanco = (banco) =>
  localStorage.setItem("todoList", JSON.stringify(banco));

function criarItem(tarefa, status, indice) {
  //criar elememto no html
  const item = document.createElement("label");
  //add class no elemento
  item.classList.add("todo-item");
  item.innerHTML = `<input type="checkbox" ${status} data-indice=${indice}>
  <div>${tarefa}</div>
  <input
    type="image"
    src="imagens/trash-can-regular.svg"
    width="25"
    height="20"
    alt=""
    id="deletar"
    data-indice=${indice}>`;

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
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
};

const tarefaValida = (texto) => {
  if (texto == "") {
    alert("informe um tarefa valida");
    return false;
  } else {
    return true;
  }
};

const inserirItem = (evento) => {
  const banco = getBanco();
  if (evento.key == "Enter") {
    if (tarefaValida(txt.value)) {
      banco.push({ tarefa: evento.target.value, status: "" });
      setBanco(banco);
      atualizarTela();
      txt.value = "";
    }
  }
  if (evento.type == "click") {
    if (tarefaValida(txt.value)) {
      banco.push({ tarefa: txt.value, status: "" });
      setBanco(banco);
      atualizarTela();
      txt.value = "";
    }
  }
};
const deletarItem = (indice) => {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
};
const atualizarItem = (indice) => {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco)
  atualizarTela();
};

const clickItem = (evento) => {
  const elemento = evento.target;
  if (elemento.type == "image") {
    let indice = elemento.dataset.indice;

    deletarItem(indice);
  } else if (elemento.type === "checkbox") {
    let indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
};

txt.addEventListener("keypress", inserirItem);
plus.addEventListener("click", inserirItem);

document.getElementById("todoList").addEventListener("click", clickItem);
atualizarTela();
