const buttonSubmit = document.querySelector('button');
const inputTodo = document.querySelector('input');
const list = document.querySelector('ul');

buttonSubmit.addEventListener('click', () => {
    const listElement =  document.createElement('li');
    listElement.innerText = inputTodo.value;
    list.appendChild(listElement);
    listElement.classList.add('todo-list-element');
});