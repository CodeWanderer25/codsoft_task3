document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyValue = key.getAttribute('data-key');
            if (keyValue === 'clear') {
                display.value = '';
            } else if (keyValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                display.classList.add('result');
                setTimeout(() => display.classList.remove('result'), 500);
            } else {
                display.value += keyValue;
            }
        });
    });
});
