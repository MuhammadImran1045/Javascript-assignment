// function increaseFontSizeBy100px() {
//     txt = document.getElementById('a');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 100) + 'px';
// }

function increaseFontSizeBy10px() {
    txt = document.getElementById('a');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 10) + 'px';
}


function decreaseFontSizeBy10px() {
    txt = document.getElementById('a');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 10) + 'px';
}