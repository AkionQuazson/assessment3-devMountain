const colorBtn = document.getElementById('color');
const placeBtn = document.getElementById('place');
const ritualBtn = document.getElementById('ritual');

colorBtn.addEventListener('click', (e) => {
    e.preventDefault();

    alert('My favorite color is red.')
})
placeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    alert('My favorite place is home.')
})
ritualBtn.addEventListener('click', (e) => {
    e.preventDefault();

    alert('My favorite ritual is my evening prayer with my wife each night.')
})