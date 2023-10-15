const btn = document.querySelectorAll('.btn');
const input = document.getElementById('textArea');
const space = document.getElementById('space');
const removeBtn = document.getElementById('removeBtn');
const removeBtn1 = document.getElementById('removeBtn1');
const shiftBtn = document.getElementById('shiftBtn');
const removeImg = document.getElementById('removeImg');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const div1 = document.querySelector('.innerdiv1');
const div2 = document.querySelector('.innerdiv2');

let isUpperCase = false;

btn.forEach(function (button) {
    button.addEventListener('click', function () {
        const getKey = this.getAttribute('data-key');
        if (isUpperCase) {
            input.value += getKey.toUpperCase();
        } else {
            input.value += getKey;
        }
    });
});

space.addEventListener('click', () => {
    input.value += " ";
});

removeBtn.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});

removeBtn1.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
});


shiftBtn.addEventListener('click', () => {
    isUpperCase = !isUpperCase;
    if (isUpperCase) {
        btn.forEach(function (button) {
            const getKey = button.getAttribute('data-key');
            if (/[a-zA-Z]/.test(getKey)) {
                button.textContent = getKey.toUpperCase();
            }
        });
    } else {
        btn.forEach(function (button) {
            const getKey = button.getAttribute('data-key');
            if (/[a-zA-Z]/.test(getKey)) {
                button.textContent = getKey.toLowerCase();
            }
        });
    }
});


num1.addEventListener('click', () => {
    div1.style.display = 'none';
    div2.style.display = 'block';
});

num2.addEventListener('click', () => {
    div1.style.display = 'block';
    div2.style.display = 'none';
});