const { invoke } = window.__TAURI__.tauri

function color_toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function filter_selection(c) {
    var x, i
    x = document.getElementsByClassName('filter')
    for (i = 0; i < x.length; i++) {
        add_class(x[i], 'hidden')
        if (x[i].className.indexOf(c) > -1) {
            remove_class(x[i], 'hidden')
        }
    }
}

function reset_filter() {
    var x, i
    x = document.getElementsByClassName('filter')
    for (i = 0; i < x.length; i++) {
        add_class(x[i], 'hidden')
        if (x[i].className.indexOf('home') > -1) {
            remove_class(x[i], 'hidden')
        }
    }
}

function add_class(element, name) {
    var i, arr1, arr2
    arr1 = element.className.split(' ')
    arr2 = name.split(' ')
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i]
        }
    }
}

function remove_class(element, name) {
    var i, arr1, arr2
    arr1 = element.className.split(' ')
    arr2 = name.split(' ')
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(' ')
}

async function get_ports() {
    const devices = await invoke('get_serials');
    const dropdown_menu = document.getElementById("devices");
    for (var i = 0; i < devices.length; i++) {
        var opt = document.createElement('option');
        opt.value = devices[i];
        opt.innerHTML = devices[i];
        dropdown_menu.appendChild(opt);
    }
}
