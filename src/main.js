const { invoke } = window.__TAURI__.tauri;


var select = document.getElementById('select');
var value;
var selection;

document.querySelector('#button')
    .addEventListener('click', event => {
        let target = event.target;
        if (target.matches('button')) {
            selection = target.innerHTML
            var x = document.getElementsByClassName('selectable');
            x.forEach((i) => {
                var type = i.dataset.type.split(' ');
                if (type.includes(selection)) {
                    i.classList.remove('hidden');
                } else {
                    i.classList.add('hidden');
                }
            })
        }
    });




