let toast = {
    'icon': {
        'success': '<i class="fa-solid fa-circle-check"></i>',
        'error': '<i class="fa-solid fa-circle-exclamation"></i>'
    },
    'init': function init(status, message){
                let toastContainer = document.createElement('div');
                toastContainer.classList.add('toast-container');
                toastContainer.classList.add(status);
                toastContainer.innerHTML = `<div>
                                          <span class="toast-icon">${this.icon[status]}</span>
                                          <span class="toast-message">${message}</span>
                                        </div>
                                        <span class="toast-close"><i class="fa-solid fa-xmark"></i></span>
                                        `
                let toastDiv = document.querySelector('.toast')
                toastDiv.append(toastContainer);

                if(toastDiv.offsetHeight >= window.innerHeight) {
                    document.querySelectorAll('.toast-container')[0].remove();
                }

                document.querySelector('.toast-close').addEventListener('click', function (){
                    toastContainer.remove();
                })

                setTimeout(()=>{
                    toastContainer.style.animation = 'hideToast ease-in 0.5s forwards';
                }, 4000);

                setTimeout(()=>{
                    toastContainer.remove();
                }, 5000);

    },
    'success': function (mess){
        this.init('success', mess);
    },
    'error': function (mess){
        this.init('error', mess);
    }
}