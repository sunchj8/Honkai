const items = [
    { name: "Гепард", description: "Честный, благородный и справедливый юноша, командир Среброгривых Стражей.", image: "Foto/гепард.jpg" },
    { name: "Броня", description: "Элегантная и утонченная наследница Коколии, Верховной хранительницы Белобога.", image: "Foto/броня.jpg" },
    { name: "Сервал", description: "Девушка-механик, которая раньше работала на технологический отдел Архитекторов.", image: "Foto/сервал.jpg" },
    { name: "Цзин Юань", description: "Первоклассный воин в прошлом и опытный генерал в настоящем.", image: "Foto/uan.jpg" },
    { name: "Фэйсяо", description: "Относится к лисьему народу долгожителей и генерал Небесной Дуги на Сяньчжоу.", image: "Foto/xio.jpg" },
    { name: "Пожиратель Луны", description: "Верховный старейшина Лофу, носитель наследия Лазурного дракона.", image: "Foto/lun.jpg" },
    { name: "Воскресенье", description: "Является одним из членов правящей фракции Пенаконии, называющей себя «Семьёй».", image: "Foto/sunday.jpg" },
    { name: "Ахерон", description: "Таинственная странница, которая называет себя Галактическим рейнджером.", image: "Foto/aheron.jpg" },
    { name: "Зарянка", description: "Певица-галовианка и сестра Воскресенья.", image: "Foto/robin.jpg" },
    { name: "Бутхилл", description: "Киборг-ковбой, скитающийся среди звёзд.", image: "Foto/buthil.jpg" },
    { name: " Господин Река", description: "Известный режиссер, знаменитый не только на Пенаконии, но и далеко за ее пределами. ", image: "Foto/reca.jpg" },
    { name: "Авантюрин", description: "Один из Десяти каменных сердец, топ-менеджер отдела стратегических инвестиций в «Корпорации межзвездного мира».", image: "Foto/ava.jpg" }
];

const vvod = document.getElementById('vvod');
const vyvod = document.getElementById('vyvod');

function renderGrid(filter = "") {
    vyvod.innerHTML = "";
    items
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(item => {
            const card = document.createElement('div');
            card.className = 'term-card';
            card.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <div class="description">${item.description}</div>
            `;
            card.addEventListener('click', () => {
                const description = card.querySelector('.description');
                if (description.style.display === 'block') {
                    description.style.display = 'none';
                } else {
                    const descriptions = document.querySelectorAll('.description');
                    descriptions.forEach(desc => desc.style.display = 'none');
                    description.style.display = 'block';
                }
            });
            vyvod.appendChild(card);
        });
}

vvod.addEventListener('input', () => {
    renderGrid(vvod.value);
});

// Initial render
renderGrid();