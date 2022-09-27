let input = document.getElementById('input');
let btn = document.getElementById('btn');
let result = document.getElementById('result');

btn.addEventListener('click', () => {
    if (!Number(input.value)) {
        result.innerText = '数値を入力しなさい！あほ';
    } else if (Number(input.value) % 2 === 0) {
        result.innerText = '偶数';
    } else {
        result.innerText = '奇数';
    }
});