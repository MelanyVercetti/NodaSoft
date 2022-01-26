const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('active');
});