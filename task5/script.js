const mainField = document.querySelector("input");
const duplicateField = document.querySelector("#duplicateField");

mainField.addEventListener("input", function() {
	duplicateField.textContent = mainField.value

});


const button = document.querySelector("button");

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(mainField.value);
    mainField.value = null;
    duplicateField.textContent = "";
   
});