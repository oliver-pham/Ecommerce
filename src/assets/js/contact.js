window.onload = function () {
    var radioButtons = document.querySelectorAll('input[type=radio][name="msg-type"]');
    var checkboxes = document.querySelectorAll('input[type=checkbox][name="phoned"]');

    radioButtons.forEach(radio => {
        if (radio.id === "order-problem")
            radio.addEventListener('change', () => document.getElementById('order-number-group').style.display = 'block' );
        else
            radio.addEventListener('change', () => document.getElementById('order-number-group').style.display = 'none' );
    });
}