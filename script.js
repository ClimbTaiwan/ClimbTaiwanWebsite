const longDongCard = document.querySelector('#longDongCard')
const longDongNavLink = document.querySelector('#longDongNavLink');

longDongNavLink.addEventListener('click', () => {
    longDongCard.classList.toggle('d-none')
    console.log('toggle');
})