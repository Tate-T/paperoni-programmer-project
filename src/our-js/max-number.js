const inputs = document.querySelectorAll(".max-number-box-item");
const maxText = document.querySelector(".max-number-text")

const maxList = [];
console.log(maxList);

inputs.forEach(input => {
    input.addEventListener("input", (event) => {
        const num = Number(event.target.value);
        maxList.push(num);
        
        const maxNumber = Math.max(...maxList);

        maxText.textContent = `Найбільше число, яке ви ввели  ${maxNumber}`;
        // event.target.value = ""; 
    });
});



