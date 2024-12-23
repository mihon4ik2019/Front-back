const h1 = document.querySelector('h1');
h1.textContent = "Добро пожаловать на наш сайт!";

const h2 = document.querySelector('h2');
h2.style.color = 'red';

const firstParagraph = document.querySelector('p');
firstParagraph.textContent = "Это новый текст параграфа.";

const video = document.querySelector('video');
if (video) {
    video.style.display = 'none';
}

const successMessage = document.getElementById('successMessage');

let formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',

    printData: function () {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function submitForm(event) {
    event.preventDefault();

    const formFields = [
        document.querySelector('#name').value,
        document.querySelector('#email').value,
        document.querySelector('#phone').value,
        document.querySelector('#date').value,
        document.querySelector('#comment').value
    ];

    const [name, email, phone, date, comment] = formFields;

    if (!name || !email || !comment) {
        alert("Пожалуйста, заполните все обязательные поля.");
        return;
    }

    const phoneRegex = /^\+7/;
    if (!phone.match(phoneRegex)) {
        alert("Телефон должен быть в формате +7 (XXX) XXX-XX-XX.");
        return;
    }

    const emailRegex = /.[^s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Введите корректный e-mail!");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    formData.printData();

    successMessage.style.display = 'block';

    alert("Форма успешно отправлена!");
}

const form = document.querySelector('#myForm');
form.addEventListener('submit', submitForm);
