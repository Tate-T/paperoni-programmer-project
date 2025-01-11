const scientists = [ 
    { name: "Альберт", surname: "Ейнштейн", born: 1879, dead: 1955, id: 1 },
    { name: "Ісаак", surname: "Ньютон", born: 1643, dead: 1727, id: 2 },
    { name: "Галілео", surname: "Галілей", born: 1564, dead: 1642, id: 3 },
    { name: "Марія", surname: "Склодовська-Кюрі", born: 1867, dead: 1934, id: 4 },
    { name: "Йоганн", surname: "Кеплер", born: 1571, dead: 1630, id: 5 },
    { name: "Миколай", surname: "Коперник", born: 1473, dead: 1543, id: 6 },
    { name: "Макс", surname: "Планк", born: 1858, dead: 1947, id: 7 },
    { name: "Кетрін", surname: "Блоджетт", born: 1898, dead: 1979, id: 8 },
    { name: "Ада", surname: "Лавлейс", born: 1815, dead: 1852, id: 9 },
    { name: "Сара Е.", surname: "Гуд", born: 1855, dead: 1905, id: 10 },
    { name: "Ліза", surname: "Мейтнер", born: 1878, dead: 1968, id: 11 },
    { name: "Ганна", surname: "Хаммарстрьом", born: 1829, dead: 1909, id: 12 }
];

const filters = document.querySelectorAll(".sort-list-item");
const boxes = document.querySelectorAll(".scientist");
let index = 0;
let num = 0;
let can = false;
let on = true;

filters[0].addEventListener("click", zero);
filters[1].addEventListener("click", one);
filters[2].addEventListener("click", two);
filters[3].addEventListener("click", three);
filters[4].addEventListener("click", four);
filters[5].addEventListener("click", five);
filters[6].addEventListener("click", six);
filters[7].addEventListener("click", seven);
filters[8].addEventListener("click", eight);

function clearBoxes() {
    for (let i of boxes) {
        i.innerHTML = "";
    }
}

function rotateBoxes() {
    for (let i of boxes) {
        i.style.transform = "scaleX(-1)"; // Початок обертання
        setTimeout(() => i.style.transform = "scaleX(1)", 250); // Завершення обертання через 250мс
    }
}

function localeSort(array, key) {
    return array.sort((a, b) => a[key].localeCompare(b[key], 'uk'));
}

function zero(e) {
    if (on) {
        if (can) {
            filters[num].style.color = "white";
        } else {
            can = true;
        }
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 0;
        on = false;

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of scientists) {
                if (scientist.born >= 1801 && scientist.born <= 1900) {
                    boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                    index++;
                }
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function one(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 1;
        on = false;
        localeSort(scientists, 'name');

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of scientists) {
                boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                index++;
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function two(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 2;
        on = false;
        scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of scientists) {
                boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                index++;
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function three(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 3;
        on = false;
        scientists.sort((a, b) => b.born - a.born);

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            boxes[0].innerHTML = `${scientists[0].name} ${scientists[0].surname} <br> ${scientists[0].born}-${scientists[0].dead}`;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function four(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 4;
        on = false;
        const obj = scientists.find((el) => el.name === "Альберт" && el.surname === "Ейнштейн");

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            boxes[0].innerHTML = `${obj.name} ${obj.surname} <br> ${obj.born}-${obj.dead}`;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function five(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 5;
        on = false;
        const objs = scientists.filter((el) => el.surname.startsWith("С"));

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of objs) {
                boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                index++;
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function six(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 6;
        on = false;
        const objs = scientists.filter((el) => el.name[0] !== "А");

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of objs) {
                boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                index++;
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function seven(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 7;
        on = false;
        scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            boxes[0].innerHTML = `${scientists[0].name} ${scientists[0].surname} <br> ${scientists[0].born}-${scientists[0].dead}`;
            boxes[1].innerHTML = `${scientists[scientists.length-1].name} ${scientists[scientists.length-1].surname} <br> ${scientists[scientists.length-1].born}-${scientists[scientists.length-1].dead}`;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}

function eight(e) {
    if (on) {
        filters[num].style.color = "white";
        e.currentTarget.style.color = "rgb(21, 212, 24)";
        num = 8;
        on = false;
        const objs = scientists.filter((el) => el.name[0] === el.surname[0]);

        rotateBoxes();
        setTimeout(clearBoxes, 250);

        setTimeout(() => {
            for (let scientist of objs) {
                boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
                index++;
            }
            index = 0;
            setTimeout(() => on = true, 500);
        }, 500);
    }
}
