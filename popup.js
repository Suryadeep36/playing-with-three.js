const btn = document.querySelector('.btn');
const popup = document.querySelector('.popup');
btn.addEventListener('click', () => {
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
        return;
    }
    popup.style.display = 'flex';
})



