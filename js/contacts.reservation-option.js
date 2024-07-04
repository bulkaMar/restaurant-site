document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('persons');

    // Функція для оновлення стилів option елементів
    function updateOptionStyles() {
        var options = selectElement.options;

        for (var i = 0; i < options.length; i++) {
            options[i].style.color = 'rgb(130, 134, 143)';
            options[i].style.fontFamily = '"Roboto", sans-serif';
            options[i].style.fontWeight = '400';
            options[i].style.fontStyle = 'normal';
            options[i].style.fontSize = '15px';
            options[i].style.lineHeight = '17px';
        }
    }

    // Виклик функції при завантаженні сторінки
    updateOptionStyles();

    // Обробник події зміни select
    selectElement.addEventListener('change', function() {
        // Повторне застосування стилів після зміни вмісту
        updateOptionStyles();
    });
});
