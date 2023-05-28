let toDoLists = JSON.parse(localStorage.getItem("toDoLists")) || [];
let input = document.querySelector('.input');
let btnAdd = document.querySelector('.btnAdd');
let btnRemoveAll = document.querySelector('.btnRemoveAll');
let infors = document.querySelectorAll('.info');
let btnSortAZ = document.querySelector('.sortaz');
let btnSortZA = document.querySelector('.sortza');
let list = document.querySelector('.list');
let save;
let STATUS = ['pending', 'doing', 'done'];

function showToDo(status) {
    if (toDoLists) {
        let statusList = status === 'all' ? toDoLists : toDoLists.filter(item => item.status === status);
        let htmls = statusList.map(function (item, index) {
            return `
                      <li class="list-item">
                          <span class="list-title ${item.status}">${item.name}</span>
                          <div>
                          <button class="btnSetting" onclick='showSetting(this, ${index})'><i class="fa-solid fa-gear"></i></button>
                          <div class="setting">
                                ${item.status === 'done' ? '' :
                                    `<div class="option option-edit" onclick='editToDo(${JSON.stringify(item)}, ${index})'>
                                        <i class="fa-solid fa-pen-to-square"></i> 
                                        <span>Edit</span>
                                    </div>`
                                }
                                    <div class="option option-delete" onclick="deleteTodo(${index})">
                                        <i class="fa-regular fa-trash-can"></i> 
                                        <span>Delete</span>
                                    </div>
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, ${index}, "pending")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to pending</span>
                                    </div>
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, ${index}, "doing")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to doing</span>
                                    </div>
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, ${index}, "done")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to done</span>
                                    </div>
                          </div>
                          </div>
                       </li>
                    `
        })
        list.innerHTML = htmls.join('');
        console.log(window.innerHeight * 0.5)
        list.style.maxHeight = window.innerHeight * 0.5 + 'px';
        list.scrollHeight > window.innerHeight * 0.5 ? list.classList.add('overflow') : list.classList.remove('overflow');
    }
}

function showNotice() {
    document.querySelector(`.notice.all`).innerText = toDoLists.length;
    for(let i of STATUS){
        document.querySelector(`.notice.${i}`).innerText = toDoLists.filter(item => item.status === i).length;
    }
}
function render() {
    let status = document.querySelector('.info.active').id;
    showToDo(status);
    showNotice();
}

window.onload = render;

function showSetting(element, index){
    let setting = document.querySelectorAll('.setting')[index];
    if(document.querySelector('.setting.show') && !setting.classList.contains('show')) {
        document.querySelector('.setting.show').classList.remove('show');
    }
    setting.classList.toggle('show');

    function removeShow (e){
        if(e.target !== element && e.target.tagName !== 'I') {
            setting.classList.remove('show');
            document.removeEventListener('click', removeShow);
        }
    }
    document.addEventListener('click', removeShow);
}

function setStatus(item, index, status){
    item.status = status;
    toDoLists[index] = item;
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render()
}
function addToDo() {
    if (btnAdd.innerText === 'Save') {
        let str = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
        let index = toDoLists.findIndex(todo => todo.name === str);
        if(index === -1) {
            toDoLists[save].name = str;
            alert('Success')
        } else alert('Error')
        btnAdd.innerText = 'Add';
    } else {
        if (input.value.trim()) {
            let str = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
            let index = toDoLists.findIndex(todo => todo.name === str);
            if(index === -1) {
                let newToDo = {'name': str, 'status': 'pending'};
                toDoLists.push(newToDo);
                alert('Success')
            } else alert('Error')
        }
    }
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));

    if (btnSortAZ.classList.contains('active')) {
        toDoLists.sort((a, b) => a.name.localeCompare(b.name));
    } else if (btnSortZA.classList.contains('active')) {
        toDoLists.sort((a, b) => a.name.localeCompare(b.name)).reverse();
    }

    input.value = '';
    input.focus();
    render();
}
function deleteTodo(index) {
    let isConfirm = confirm('Xác nhận xóa');
    if(isConfirm){
        toDoLists.splice(index, 1);
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
        render();
    }
}

function editToDo(item, index) {
    input.value = item.name;
    input.focus();
    btnAdd.innerText = 'Save';
    save = index;
}

function removeAll(){
    let status = document.querySelector('.info.active').id;
    let isConfirm = confirm(`Xác nhận xóa tất cả trong mục ${status[0].toUpperCase() + status.slice(1)}`);
    if(isConfirm) {
        if (status === 'all') {
            toDoLists = [];
        } else {
            toDoLists = toDoLists.filter(todo => todo.status !== status);
        }
        localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
        render();
    }
}

btnAdd.addEventListener('click', addToDo);
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') addToDo();
})
btnRemoveAll.addEventListener('click', removeAll);

infors.forEach((info) => {
    info.onclick = function () {
        document.querySelector('.info.active').classList.remove('active');
        this.classList.add('active');
        render();
    }
})

function sort (btn1, btn2,order){
    if (btn1.classList.contains('active')) {
        btn1.classList.remove('active');
        toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
    } else {
        btn2.classList.remove('active');
        btn1.classList.add('active');
        if(order === 'ASC')
            toDoLists.sort((a, b) => a.name.localeCompare(b.name));
        else
            toDoLists.sort((a, b) => b.name.localeCompare(a.name));
    }
    render();
}

btnSortAZ.addEventListener('click', function (){
    sort(btnSortAZ, btnSortZA, 'ASC');
})

btnSortZA.addEventListener('click', function (){
    sort(btnSortZA, btnSortAZ, 'DSC');
})
