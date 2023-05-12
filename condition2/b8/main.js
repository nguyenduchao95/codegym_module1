let controls = document.querySelectorAll('.control');
let btns = document.querySelectorAll('.btn');

let colors = ['rgba(70, 139, 0, 0.5)', 'rgb(233, 102, 217)', 'rgb(237, 118, 118)']

let size = btns.length;
btns.forEach(function (btn, index){
    btn.onclick = function () {
        if (!this.classList.contains('on')) {
            let btnOn = document.querySelectorAll('.on')
            if(btnOn.length == size-1){
                let i = index == 0 ? size-1 : index - 1;
                btns[i].classList.remove('on');
                btns[i].classList.add('off');
                controls[i].style = 'background: grey; transition: background 2s;';
            }
            this.classList.remove('off');
            this.classList.add('on');
            controls[index].style = `background: ${colors[index]}; transition: background 1s;`;
        }
    }
})
