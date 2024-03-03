const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const bell = document.getElementById('_bell');


button.addEventListener('click', () => {
    const counter = Number(notification.getAttribute('data-count')) || 0;


    notification.setAttribute('data-count', counter + 1);
    notification.classList.add('count');
    notification.classList.add('notify');
    bell.classList.add('shake'); 
    button.classList.add('active');
})


bell.addEventListener('animationend', () => {
    bell.classList.remove('shake'); 
})


notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
})

