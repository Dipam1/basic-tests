let count = 0;
const countSpan = document.getElementById('count');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    count++;
    countSpan.textContent = count;
});
