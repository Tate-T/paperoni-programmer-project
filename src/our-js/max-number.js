// const inputs = document.querySelectorAll(".max-number-box-item");
// const maxText = document.querySelector(".max-number-text")

// const maxList = [];

// inputs.forEach(input => {
//     input.addEventListener("input", (event) => {
//         const num = Number(event.target.value);
//         maxList.push(num);
        
//         const maxNumber = Math.max(...maxList);

//         maxText.textContent = `Найбільше число, яке ви ввели  ${maxNumber}`;
//         // event.target.value = ""; 
//     });
// });



const inputs = document.querySelectorAll(".max-number-box-item");
const maxText = document.querySelector(".max-number-text");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        const values = Array.from(inputs).map(item => Number(item.value) || 0);

        const maxNumber = Math.max(...values);

        maxText.textContent = `Найбільше число, яке ви ввели: ${maxNumber}`;
    });
});