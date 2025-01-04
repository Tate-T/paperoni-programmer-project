const inputs = document.querySelectorAll(".max-number-box-item");
const maxText = document.querySelector(".max-number-text")

const maxList = [];
console.log(maxList);

inputs.forEach(input => {
    input.addEventListener("change", (event) => {
        const num = event.target.value;
        maxList.push(num);
        // event.target.value = ""; 

        let maxNumber = maxList[0];
        console.log(maxList)
        
        for (let i = 0; i < maxList.length; i++) {
            if (maxList[i] > maxNumber) {
                maxNumber = maxList[i]; 
            }
        }

        maxText.textContent = `Найбільше число, яке ви ввели  ${maxNumber}`;
    });
});



