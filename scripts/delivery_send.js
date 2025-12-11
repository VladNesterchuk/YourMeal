function senddata() {
    // Отримання даних з полів форми
    var data = {
        name: $('#name').val(),
        number: $('#number').val(),
        street: $('#street').val(),
        floor: $('#floor').val(),
        intercom: $('#intercom').val(),
    };

    // Виведення даних у консоль перед відправкою AJAX-запиту
    console.log(data);

    // Відправка AJAX-запиту на сервер
    $.ajax({
        url: 'data.php',
        type: 'POST',
        data: data,
        success: function(response) {
            alert('Ваше замовлення оформлено!');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Виникла помилка: ' + textStatus);
        }
    });
}
