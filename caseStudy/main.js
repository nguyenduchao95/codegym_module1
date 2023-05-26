let toDoLists = JSON.parse(localStorage.getItem("toDoLists")) || [];
let input = document.querySelector('.input');
let btnAdd = document.querySelector('.btnAdd');
let lists = document.querySelectorAll('.list');
let btnRemoveAll = document.querySelector('.btnRemoveAll');
let infors = document.querySelectorAll('.info');
let sortAZ = document.querySelector('.sortaz');
let sortZA = document.querySelector('.sortza');
let save;

function showToDo(status) {
    if (toDoLists) {
        let statusList = status === 'all' ? toDoLists : toDoLists.filter(item => item.status === status);
        let htmls = statusList.map(function (item, index) {
            return `
                      <li>
                          <span class="list-title ${item.status}" onclick='handleComplete(${JSON.stringify(item)}, ${index})'>${item.name}</span>
                          <div>
                                ${item.status === 'completed' ? '' :
                                    `<button class="btn btnEdit" onclick='editToDo(${JSON.stringify(item)}, ${index})'>
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    </button>`
                                }
                                    <button class="btn btnDelete" onclick="deleteTodo(${index})"><i class="fa-solid fa-trash"></i></button>
                          </div>
                       </li>
                    `
        })
        document.querySelector(`.list.${status}`).innerHTML = htmls.join('');
    }
}
function render() {
    showToDo('all');
    showToDo('pending');
    showToDo('completed');
}

window.onload = render;
function addToDo() {
    if (btnAdd.innerText === 'Save') {
        toDoLists[save].name = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
        btnAdd.innerText = 'Add';
    } else {
        if (input.value.trim()) {
            let str = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
            let newToDo = { 'name': str, 'status': 'pending' };
            toDoLists.push(newToDo);
        }
    }
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));

    if (sortAZ.classList.contains('active')) {
        toDoLists.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortZA.classList.contains('active')) {
        toDoLists.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }

    input.value = '';
    input.focus();
    render();
}
function deleteTodo(index) {
    toDoLists.splice(index, 1);
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render();
}

function editToDo(item, index) {
    input.value = item.name;
    input.focus();
    btnAdd.innerText = 'Save';
    save = index;
}

function handleComplete(item, index) {
    item.status = item.status === 'pending' ? 'completed' : 'pending';
    toDoLists[index] = item;
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render();
}

btnAdd.addEventListener('click', addToDo);

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addToDo();
})

btnRemoveAll.addEventListener('click', function () {
    toDoLists = []
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render();
})

infors.forEach((info, index) => {
    info.onclick = function () {
        infors.forEach(item => item.classList.remove('active'));
        this.classList.add('active');

        lists.forEach(item => item.classList.remove('show'));
        lists[index].classList.add('show');
    }
})

sortAZ.onclick = function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        toDoLists = JSON.parse(localStorage.getItem("toDoLists"))
    } else {
        sortZA.classList.remove('active');
        this.classList.add('active');
        toDoLists.sort((a, b) => a.name.localeCompare(b.name));
    }
    render();
}

sortZA.onclick = function () {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
    } else {
        sortAZ.classList.remove('active');
        this.classList.add('active');
        toDoLists.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }
    render();
}
