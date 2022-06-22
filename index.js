const buttonSubmit = document.querySelector('button');
const inputTodo = document.querySelector('input');
const list = document.querySelector('ul');

buttonSubmit.addEventListener('click', () => {
    const listElement = document.createElement('li');
    listElement.innerText = inputTodo.value;

    if (listElement.innerText != '') {
        list.appendChild(listElement);
        listElement.classList.add('todo-list-element');
        inputTodo.value = "";
    
        listElement.addEventListener('click', () => {
            listElement.classList.add('todo-list-element-complete');
        });
    }

    listElement.addEventListener('dblclick', () => {
        listElement.classList.remove('todo-list-element-complete', 'todo-list-element');
        listElement.innerText = '';
    });
});