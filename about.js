console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted.");
}


let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let image = document.querySelector('img');
image.addEventListener('mouseover', (e) => {
	alert('Your taste in animals is amazing!');
})