//Responsive navbar
const btnMenu = document.querySelector('.btn-menu');
const navMenu = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');

function openCloseMenu() {
  navMenu.classList.toggle('active');
  btnMenu.classList.toggle('active');
}

function onlyCloseMenu() {
  btnMenu.classList.remove('active');
  navMenu.classList.remove('active');
}

navItem.forEach((n) => n.addEventListener('click', onlyCloseMenu));

btnMenu.addEventListener('click', openCloseMenu);

//geração de textos na página dependendo da escolha do botão
//botões de escolha de conteudo
const btnPositiveOne = document.querySelector('.button-positive-one');
const btnNegativeOne = document.querySelector('.button-negative-one');
const btnPositiveTwo = document.querySelector('.button-positive-two');
const btnNegativeTwo = document.querySelector('.button-negative-two');

//seleção de todas as tags com descrição do projeto
const descriptionProject = document.getElementsByTagName('p');

//reload na pagina
const reloadPage = document.querySelector('.nav-logo');
reloadPage.addEventListener('click', function () {
  location.reload();
});

//Conteúdo conforme escolha dos botões
const positiveOne = document.querySelector('.positive-one');
const negativeOne = document.querySelector('.negative-one');
const positiveTwo = document.querySelectorAll('.positive-two');
const negativeTwo = document.querySelectorAll('.negative-two');

//resposta positiva da primeira pergunta
btnPositiveOne.addEventListener('click', function () {
  positiveOne.classList.remove('hide-element');
  negativeOne.classList.add('hide-element');
});

//resposta negativa da primeira pergunta
btnNegativeOne.addEventListener('click', function () {
  positiveOne.classList.add('hide-element');
  negativeOne.classList.remove('hide-element');
});

//resposta positiva na segunda pergunta
btnPositiveTwo.addEventListener('click', function () {
  positiveTwo.forEach((n) => n.classList.remove('hide-element'));
  negativeTwo.forEach(n => n.classList.add('hide-element'));
});

//resposta negativa na segunda pergunta
btnNegativeTwo.addEventListener('click', function () {
  negativeTwo.forEach(n => n.classList.remove('hide-element'));
  positiveTwo.forEach((n) => n.classList.add('hide-element'));

})

// Quando a pessoa diz que não quer ler sobre a proposta do projeto,
// eu substituo todo o conteúdo por lorem ipsum para ela ver apenas
// o layout fazendo um for dentro das tags <p> substituindo o texto original.
btnNegativeOne.addEventListener('click', function () {
  for (let i = 2; i < descriptionProject.length - 1; i++) {
    const element = descriptionProject[i];
    element.innerHTML =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt. Tortor at auctor urna nunc id. Egestas tellus rutrum tellus pellentesque eu. Nisi quis eleifend quam adipiscing. Pulvinar etiam non quam lacus suspendisse. Dignissim enim sit amet venenatis urna. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Eleifend quam adipiscing vitae proin. Eget velit aliquet sagittis id consectetur purus ut faucibus. Ut morbi tincidunt augue interdum velit euismod. Quam quisque id diam vel. Quis eleifend quam adipiscing vitae proin.';
  }
});

// set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
