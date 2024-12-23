// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Валидация формы и обработка отправки
form.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;

    if (name === "" || email === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    // Проверка на корректность email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return;
    }

    // Проверка на корректность телефона
    function validateForm(event) {
        event.preventDefault(); 
        const phoneInput = document.getElementById('telephone');
        const phoneValue = phoneInput.value;

        // Простейшая валидация: проверяем, не пустое ли поле и соответствует ли формату
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneValue.match(phonePattern)) {
            alert('Введите номер телефона в формате: +7 (999) 999-99-99');
            return;
        }
    }

    // Если все проверки пройдены, показываем сообщение об успехе
    successMessage.style.display = "block";
    alert("Форма успешно отправлена!");

    
    // Закрываем модальное окно через 2 секунды
    setTimeout(() => {
        modal.style.display = "none";
        successMessage.style.display = "none"; // Скрываем сообщение об успехе
        form.reset(); // Сбрасываем форму
    }, 1000);
}


