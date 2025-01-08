const textRemove = document.querySelector("[data-remove]");
const btnYear = document.querySelector("[data-btnYear]");
const inputYear = document.querySelector("[data-inputYear]");

btnYear.addEventListener("click", () => {
    const year = parseInt(inputYear.value, 10);

    if (isNaN(year) || year <= 0) {
        textRemove.textContent = "Введіть коректний рік!";
        textRemove.style.color = "black";
    } else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        textRemove.textContent = "Ви народилися у високосний рік!";
        textRemove.style.color = "green";
    } else {
        textRemove.textContent = "Ви народилися не у високосний рік!";
        textRemove.style.color = "red";
    }
});
