let dom = {
    colorBtn: null,
    placeBtn: null,
    ritualBtn: null
}

const init = () => {
    dom.colorBtn = document.getElementById('color');
    dom.placeBtn = document.getElementById('place');
    dom.ritualBtn = document.getElementById('ritual');

    dom.colorBtn.addEventListener('click', (e) => {
        e.preventDefault();

        alert('My favorite color is red.')
    })
    dom.placeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        alert('My favorite place is home.')
    })
    dom.ritualBtn.addEventListener('click', (e) => {
        e.preventDefault();

        alert('My favorite ritual is my evening prayer with my wife each night.')
    })
}