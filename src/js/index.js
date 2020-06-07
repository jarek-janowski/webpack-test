import '../scss/main.scss';

/* place your code below */

const firstName = ('Jarek');
const age = ('24');

// alert('Witaj!')


// const heading = document.querySelector('.main-heading--js');

// heading.innerHTML = `Cześć! Jestem ${imie}, mam ${age} lata i witam Cie na mojej stronie :)`;

//---------------------------------<>------------------------------------------

// const footer = document.querySelector('.footer__decription--js');

// footer.innerHTML = '<b>WTF</b> - all rights reserved ';



function oldHello(firstName, age) {
    console.log((`Cześć! Jestem ${firstName}, mam ${age} lata i witam Cie na mojej stronie :)`));
    // return firstName, age;
}

oldHello(firstName, age);

// --------- Fat Arrow -----------

const hello = (firstName, age) => {
    console.log((`Cześć! Jestem ${firstName}, mam ${age} lata i witam Cie na mojej stronie :)`));
}

hello(firstName, age);

//-------------------------------<>------------------------------------------------


function replaceText(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

replaceText('.footer__decription--js', '<b>WTF</b> - all rights reserved ');

function helloAlert(firstName, age) {
    alert(`Cześć! Jestem ${firstName}, mam ${age} lata i witam Cie na mojej stronie :)`);
    // return firstName, age;
}

// helloAlert(firstName, age);


const jarek = {
    age: 24,
    girls: (amountOfGirls) => {
        console.log(`Jarek had ${amountOfGirls} girls`)
    },
    height: 181,
    isHeHandsome: true,
    job: 'Webdeveloper wanna be',
    name: 'Jarek',
}

console.log(jarek.job);
jarek.girls(20);




const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})