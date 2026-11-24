
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {

    menuToggle.addEventListener('click', () => {

        nav.classList.toggle('open');

        const aberto = nav.classList.contains('open');

        menuToggle.setAttribute('aria-expanded', aberto);

        menuToggle.textContent = aberto ? '✕' : '☰';

    });

    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            nav.classList.remove('open');

            menuToggle.setAttribute('aria-expanded', 'false');

            menuToggle.textContent = '☰';

        });

    });

}