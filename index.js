document.addEventListener('DOMContentLoaded', function () {
    var display = document.querySelector('.display h2');
    var buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var buttonContent = this.textContent;
            handleButtonClick(buttonContent);
        });
    });

    function handleButtonClick(content) {
        // Handle different button clicks here
        if (content === 'c') {
            // Clear the display
            display.textContent = '';
        } else if (content === '=') {
            // Evaluate and display the result
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        } else {
            // Append the button content to the display
            display.textContent += content;
        }
    }
});