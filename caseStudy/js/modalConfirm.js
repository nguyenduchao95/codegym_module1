let modal = document.querySelector('.modal');
function confirmDelete(messConfirm, index,status, messToast) {
    let modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.innerHTML = `
                                     <span class="modal-icon"><i class="fa-solid fa-circle-exclamation"></i></span>
                                     <h1 class="modal-title">${messConfirm}</h1>
                                     <div>
                                         <button class="btn btnYes" onclick="handleYes(${index}, '${status}', '${messToast}')">Yes</button>
                                         <button class="btn btnCancel" onclick="handleCancel()">Cancel</button>
                                     </div>
                                    `
    modal.append(modalContainer);
    modal.classList.add('open');

    modal.onclick = () => {
        modalContainer.remove();
        modal.classList.remove('open');
    }

    modalContainer.onclick = function (e) {
        if (e.target === modalContainer || e.target.parentElement === modalContainer || e.target.tagName === 'I') {
            e.stopPropagation();
        }
    }
}

function handleYes(index, status, messToast) {
    if (index !== -1) {
        toDoLists.splice(index, 1);
    } else {
        toDoLists = status === 'all' ? [] : toDoLists.filter(todo => todo.status !== status);
    }
    localStorage.setItem("toDoLists", JSON.stringify(toDoLists));
    render();
    toast.success(messToast);
    modal.classList.remove('open');
}

function handleCancel() {
    modal.classList.remove('open');
}