const textLink = document.querySelector("a");

textLink.addEventListener("click", function(event) {
    textLink.textContent = prompt("Введите текст");	
	event.preventDefault();
});
