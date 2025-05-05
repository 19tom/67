document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.bouncing-image');
    const background = document.getElementById('background');

    let x = Math.random() * (background.clientWidth - image.clientWidth);
    let y = Math.random() * (background.clientHeight - image.clientHeight);
    let dx = 5; // Скорость по оси X
    let dy = 5; // Скорость по оси Y

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        background.appendChild(trail);

        // Удаляем след через 1 секунду
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function animate() {
        // Обновляем позицию изображения
        x += dx;
        y += dy;

        // Проверяем столкновение с границами контейнера
        if (x + image.clientWidth > background.clientWidth || x < 0) {
            dx = -dx; // Изменяем направление по оси X
        }
        if (y + image.clientHeight > background.clientHeight || y < 0) {
            dy = -dy; // Изменяем направление по оси Y
        }

        // Применяем новые координаты к изображению
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Создаем след
        createTrail(x, y);

        // Запрашиваем следующий кадр анимации
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.bouncing-image');
    const background = document.getElementById('background');

    let x = Math.random() * (background.clientWidth - image.clientWidth);
    let y = Math.random() * (background.clientHeight - image.clientHeight);
    let dx = 5; // Скорость по оси X
    let dy = 5; // Скорость по оси Y

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        background.appendChild(trail);

        // Удаляем след через 1 секунду
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function animate() {
        // Обновляем позицию изображения
        x += dx;
        y += dy;

        // Проверяем столкновение с границами контейнера
        if (x + image.clientWidth > background.clientWidth || x < 0) {
            dx = -dx; // Изменяем направление по оси X
        }
        if (y + image.clientHeight > background.clientHeight || y < 0) {
            dy = -dy; // Изменяем направление по оси Y
        }

        // Применяем новые координаты к изображению
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Создаем след
        createTrail(x, y);

        // Запрашиваем следующий кадр анимации
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.bouncing-image');
    const background = document.getElementById('background');

    let x = Math.random() * (background.clientWidth - image.clientWidth);
    let y = Math.random() * (background.clientHeight - image.clientHeight);
    let dx = 5; // Скорость по оси X
    let dy = 5; // Скорость по оси Y

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        background.appendChild(trail);

        // Удаляем след через 1 секунду
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function animate() {
        // Обновляем позицию изображения
        x += dx;
        y += dy;

        // Проверяем столкновение с границами контейнера
        if (x + image.clientWidth > background.clientWidth || x < 0) {
            dx = -dx; // Изменяем направление по оси X
        }
        if (y + image.clientHeight > background.clientHeight || y < 0) {
            dy = -dy; // Изменяем направление по оси Y
        }

        // Применяем новые координаты к изображению
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Создаем след
        createTrail(x, y);

        // Запрашиваем следующий кадр анимации
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.bouncing-image');
    const background = document.getElementById('background');

    let x = Math.random() * (background.clientWidth - image.clientWidth);
    let y = Math.random() * (background.clientHeight - image.clientHeight);
    let dx = 5; // Скорость по оси X
    let dy = 5; // Скорость по оси Y

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        background.appendChild(trail);

        // Удаляем след через 1 секунду
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function animate() {
        // Обновляем позицию изображения
        x += dx;
        y += dy;

        // Проверяем столкновение с границами контейнера
        if (x + image.clientWidth > background.clientWidth || x < 0) {
            dx = -dx; // Изменяем направление по оси X
        }
        if (y + image.clientHeight > background.clientHeight || y < 0) {
            dy = -dy; // Изменяем направление по оси Y
        }

        // Применяем новые координаты к изображению
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Создаем след
        createTrail(x, y);

        // Запрашиваем следующий кадр анимации
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});

document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.bouncing-image');
    const background = document.getElementById('background');

    let x = Math.random() * (background.clientWidth - image.clientWidth);
    let y = Math.random() * (background.clientHeight - image.clientHeight);
    let dx = 5; // Скорость по оси X
    let dy = 5; // Скорость по оси Y

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Случайный цвет
        background.appendChild(trail);

        // Удаляем след через 1 секунду
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function animate() {
        // Обновляем позицию изображения
        x += dx;
        y += dy;

        // Проверяем столкновение с границами контейнера
        if (x + image.clientWidth > background.clientWidth || x < 0) {
            dx = -dx; // Изменяем направление по оси X
        }
        if (y + image.clientHeight > background.clientHeight || y < 0) {
            dy = -dy; // Изменяем направление по оси Y
        }

        // Применяем новые координаты к изображению
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;

        // Создаем след
        createTrail(x, y);

        // Запрашиваем следующий кадр анимации
        requestAnimationFrame(animate);
    }

    // Запускаем анимацию
    animate();
});

