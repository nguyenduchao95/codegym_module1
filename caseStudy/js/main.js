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
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, "pending")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to pending</span>
                                    </div>
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, "doing")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to doing</span>
                                    </div>
                                    <div class="option" onclick='setStatus(${JSON.stringify(item)}, "done")'>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>Add to done</span>
                                    </div>
                          </div>
                          </div>
                       </li>
                    `
        })
        list.innerHTML = htmls.join('') || "You don't have any task here";
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

function setStatus(item, status){
    item.status = status;
    let index = toDoLists.findIndex(todo => todo.name === item.name);
    toDoLists[index] = item;
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render();
}
function addToDo() {
    if (btnAdd.innerText === 'Save') {
        let str = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
        let index = toDoLists.findIndex(todo => todo.name === str);
        if(index === -1) {
            toDoLists[save].name = str;
            toast.success('Update task successfully!');
        } else {
            toast.error('Task already exists!');
        }
        btnAdd.innerText = 'Add';
    } else {
        if (input.value.trim()) {
            let str = input.value.trim()[0].toUpperCase() + input.value.trim().slice(1);
            let index = toDoLists.findIndex(todo => todo.name === str);
            if(index === -1) {
                let newToDo = {'name': str, 'status': 'pending'};
                toDoLists.push(newToDo);
                toast.success('Add new task successfully!');
            } else {
                toast.error('Task already exists!');
            }
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
    // let isConfirm = confirm('Xác nhận xóa');
    // if(isConfirm){
    //     toDoLists.splice(index, 1);
    //     localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    //     render();
    //     toast.success('Delete task successfully!');
    // }
    confirmDelete('Xác nhận xóa?', index, 'abc', 'Delete task successfully!');
}

function editToDo(item, index) {
    input.value = item.name;
    input.focus();
    btnAdd.innerText = 'Save';
    save = index;
}

function removeAll(){
    let status = document.querySelector('.info.active').id;
    let statusList = status === 'all' ? toDoLists : toDoLists.filter(todo => todo.status === status);
    if(statusList.length) {
        let str = status[0].toUpperCase() + status.slice(1);
        let messConfirm = `Xác nhận xóa tất cả trong mục ${str}?`;
        let messToast = `Clear ${str} successfully!`
        // let isConfirm = confirm(`Xác nhận xóa tất cả trong mục ${str}`);
        // if (isConfirm) {
        //     toDoLists = status === 'all' ? [] : toDoLists.filter(todo => todo.status !== status);
        //     localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
        //     render();
        //     toast.success(`Clear ${str} successfully!`);
        // }
        confirmDelete(messConfirm, -1, status, messToast);
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
