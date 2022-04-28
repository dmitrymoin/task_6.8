const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener("click", () => {
    alert("Служит для вывода информации в консоль");
})

const Alert = document.querySelector("#Alert");

Alert.addEventListener("click", () => {
    alert("Служит для вывода на экран окна с сообщением");
})

const Prompt = document.querySelector("#Prompt");

Prompt.addEventListener("click", () => {
    prompt("Служит для вывода на экран окна с запросом на ввод текста");
})