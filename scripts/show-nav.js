// Show Mobile Navigation
const body = document.body;
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});