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
//reload na pagina
const reloadPage = document.querySelector('.nav-logo');
reloadPage.addEventListener('click', function () {
  location.reload();
});

//botões de escolha de conteudo
const btnPositiveOne = document.querySelector('.button-positive-one');
const btnNegativeOne = document.querySelector('.button-negative-one');
const btnPositiveTwo = document.querySelector('.button-positive-two');
const btnNegativeTwo = document.querySelector('.button-negative-two');

//pega o segundo container de botoes para mostrar de ou não
//de acordo com a primeira escolha.
const containerBtnTwo = document.querySelectorAll('.button-container')[1];

//Conteúdo conforme escolha dos botões
const positiveOne = document.querySelector('.positive-one');
const negativeOne = document.querySelector('.negative-one');
const positiveTwo = document.querySelectorAll('.positive-two');
const negativeTwo = document.querySelectorAll('.negative-two');

function showElement(element) {
  element.classList.remove('hide-element');
}

function hideElement(element) {
  element.classList.add('hide-element');
}

function disableButton(element) {
  element.disabled = true;
  element.style.cssText = 'pointer-events: none;';
}

//eu acesso esse elemento para que o intersection observer só apareça
//se eu clicar em umas das duas oppções iniciais fazendo com que a classe
//css hide-element seja removida durante o click de ambos os botoes.
const aboutSection = document.querySelector('.about-container');

btnPositiveOne.addEventListener('click', function () {
  showElement(positiveOne);
  disableButton(btnNegativeOne);
  aboutSection.children[0].classList.remove('hide-element');
});
//resposta negativa da primeira pergunta
// o usuário escolhendo esta opção eu retiro a opção de um
// interesse positivo e escondo os próximos botôes de escolha
// pois acaba perdendo o sentido.

btnNegativeOne.addEventListener('click', function () {
  showElement(negativeOne);
  disableButton(btnPositiveOne);
  aboutSection.children[0].classList.remove('hide-element');
  negativeTwo.forEach((n) => n.classList.remove('hide-element'));
});

//seleção de todas as tags com descrição do projeto
const descriptionProject = document.getElementsByTagName('p');

// Quando a pessoa diz que não quer ler sobre a proposta do projeto,
// eu substituo todo o conteúdo por lorem ipsum para ela ver apenas
// o layout fazendo um for dentro das tags <p> substituindo o texto original.
btnNegativeOne.addEventListener('click', function () {
  //Ele vai pular as duas primeiras tags <p> que é onde fica as respostas
  //conforme a seleção da pessoa que vê a página, e não pega a ultima tag
  // <p> onde é o agradecimento da negativa caso tenha.
  for (let i = 2; i < descriptionProject.length - 1; i++) {
    const element = descriptionProject[i];
    element.innerHTML =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo quis imperdiet massa tincidunt. Tortor at auctor urna nunc id. Egestas tellus rutrum tellus pellentesque eu. Nisi quis eleifend quam adipiscing. Pulvinar etiam non quam lacus suspendisse. Dignissim enim sit amet venenatis urna. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Eleifend quam adipiscing vitae proin. Eget velit aliquet sagittis id consectetur purus ut faucibus. Ut morbi tincidunt augue interdum velit euismod. Quam quisque id diam vel. Quis eleifend quam adipiscing vitae proin.';
  }
});

//resposta positiva na segunda pergunta
btnPositiveTwo.addEventListener('click', function () {
  positiveTwo.forEach((n) => n.classList.remove('hide-element'));
  negativeTwo.forEach((n) => n.classList.add('hide-element'));
});

//resposta negativa na segunda pergunta
btnNegativeTwo.addEventListener('click', function () {
  negativeTwo.forEach((n) => n.classList.remove('hide-element'));
  positiveTwo.forEach((n) => n.classList.add('hide-element'));
});

//scroll para o topo
// Este trecho de código eu retirei do w3schools pois ainda não tinha
// o conhecimento de como fazer um botão assim.
const btnGoTop = document.getElementById('btn-to-top');

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    btnGoTop.style.display = 'block';
  } else {
    btnGoTop.style.display = 'none';
  }
}

window.onscroll = function () {
  scrollFunction();
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Mostra o ano atual sem precisar atualizar manualmente
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Vai mostrando o conteúdo conforme a página vai scrolando
const appearOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px 50px 0px'
};

const showFader = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

showFader.forEach((fader) => {
  appearOnScroll.observe(fader);
});
