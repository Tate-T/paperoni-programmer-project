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

const activeFilters = [];

function applyFilters() {
    let filteredScientists = [...scientists];

    // Пройдемо через всі активні фільтри і застосуємо їх до списку
    activeFilters.forEach(filter => {
        filteredScientists = filter(filteredScientists);
    });

    return filteredScientists;
}

filters[0].addEventListener("click", (e) => toggleFilter(e, zero));
filters[1].addEventListener("click", (e) => toggleFilter(e, one));
filters[2].addEventListener("click", (e) => toggleFilter(e, two));
filters[3].addEventListener("click", (e) => toggleFilter(e, three));
filters[4].addEventListener("click", (e) => toggleFilter(e, four));
filters[5].addEventListener("click", (e) => toggleFilter(e, five));
filters[6].addEventListener("click", (e) => toggleFilter(e, six));
filters[7].addEventListener("click", (e) => toggleFilter(e, seven));
filters[8].addEventListener("click", (e) => toggleFilter(e, eight));

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

function toggleFilter(e, filterFn) {
    // Перевірка на наявність цього фільтру
    const isActive = activeFilters.includes(filterFn);
    
    if (isActive) {
        // Якщо фільтр вже активний, вимикаємо його
        activeFilters.splice(activeFilters.indexOf(filterFn), 1); // Видаляємо фільтр
        e.currentTarget.classList.remove("active"); // Видаляємо клас активного
    } else {
        // Якщо фільтр не активний, додаємо його
        activeFilters.push(filterFn); // Додаємо фільтр
        e.currentTarget.classList.add("active"); // Додаємо клас активного
    }

    rotateBoxes();
    setTimeout(clearBoxes, 250);

    // Застосуємо всі фільтри та оновимо виведення
    setTimeout(() => {
        let filteredScientists = applyFilters();
        index = 0;
        filteredScientists.forEach(scientist => {
            boxes[index].innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born}-${scientist.dead}`;
            index++;
        });
    }, 500);
}

function zero(scientists) {
    return scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
}

function one(scientists) {
    return localeSort(scientists, 'name');
}

function two(scientists) {
    return scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
}

function three(scientists) {
    return scientists.sort((a, b) => b.born - a.born);
}

function four(scientists) {
    return scientists.filter(scientist => scientist.name === "Альберт" && scientist.surname === "Ейнштейн");
}

function five(scientists) {
    return scientists.filter(scientist => scientist.surname.startsWith("С"));
}

function six(scientists) {
    return scientists.filter(scientist => scientist.name[0] !== "А");
}

function seven(scientists) {
    return scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
}

function eight(scientists) {
    return scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
}
