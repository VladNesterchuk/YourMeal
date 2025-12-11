document.getElementById('delivery').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'data.php', true);

    xhr.onload = function () {
        let message = document.getElementById('message');
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            if (response.success) {
                message.textContent = 'Дані успішно надіслані!';
            } else {
                message.textContent = 'Помилка: ' + response.message;
            }
        } else {
            message.textContent = 'Помилка підключення до сервера.';
        }
    };

    xhr.onerror = function () {
        document.getElementById('message').textContent = 'Помилка підключення до сервера.';
    };

    xhr.send(formData);
});