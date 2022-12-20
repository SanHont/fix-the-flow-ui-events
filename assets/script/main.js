/--------------------------------------------/;
/-----------------------1--------------------/;
/--------------------------------------------/;

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('mousewheel', jumpHandler)
frontend.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  frontend.classList.toggle('nth-of-type-active')
  frontend.classList.toggle('jump')
}

/--------------------------------------------/;
/-----------------------2--------------------/;
/--------------------------------------------/;

let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', rotateHandler)
design.addEventListener('animationend', rotateHandler)

function rotateHandler() {
  design.classList.toggle('nth-of-type-active')
  design.classList.toggle('rotate')
}

/--------------------------------------------/;
/-----------------------3--------------------/;
/--------------------------------------------/;

let wiggle = document.querySelector('a:nth-of-type(3)')

wiggle.addEventListener('mouseover', wiggleHandler)
wiggle.addEventListener('animationend', wiggleHandler)

function wiggleHandler() {
  wiggle.classList.toggle('nth-of-type-active')
  wiggle.classList.toggle('wiggle')
}

/--------------------------------------------/;
/-----------------------4--------------------/;
/--------------------------------------------/;

let disco = document.querySelector('a:nth-of-type(4)')

disco.addEventListener('click', discoHandler)
disco.addEventListener('animationend', discoHandler)

function discoHandler() {
  disco.classList.toggle('nth-of-type-active')
  disco.classList.toggle('disco')
}

/--------------------------------------------/;
/-----------------------5--------------------/;
/--------------------------------------------/;

let lefttoright = document.querySelector('a:nth-of-type(5)')

lefttoright.addEventListener('mouseout', lefttorightHandler)
lefttoright.addEventListener('animationend', lefttorightHandler)

function lefttorightHandler() {
  lefttoright.classList.toggle('nth-of-type-active')
  lefttoright.classList.toggle('lefttoright')
}

/--------------------------------------------/;
/-----------------------6--------------------/;
/--------------------------------------------/;

let upanddown = document.querySelector('a:nth-of-type(6)')

upanddown.addEventListener('click', upanddownHandler)
upanddown.addEventListener('animationend', upanddownHandler)

function upanddownHandler() {
  upanddown.classList.toggle('nth-of-type-active')
  upanddown.classList.toggle('upanddown')
}

/--------------------------------------------/;
/-----------------------7--------------------/;
/--------------------------------------------/;

let error = document.querySelector('a:nth-of-type(7)')

error.addEventListener('click', errorHandler)
error.addEventListener('animationend', errorHandler)

function errorHandler() {
  error.classList.toggle('nth-of-type-active')
  error.classList.toggle('error')
}

/--------------------------------------------/;
/-----------------------8--------------------/;
/--------------------------------------------/;

let zoom = document.querySelector('a:nth-of-type(8)')

zoom.addEventListener('click', zoomHandler)
zoom.addEventListener('animationend', zoomHandler)

function zoomHandler() {
  zoom.classList.toggle('nth-of-type-active')
  zoom.classList.toggle('zoom')
}

/--------------------------------------------/;
/-----------------------9--------------------/;
/--------------------------------------------/;

let zoomin = document.querySelector('a:nth-of-type(9)')

zoomin.addEventListener('click', zoominHandler)
zoomin.addEventListener('animationend', zoominHandler)

function zoominHandler() {
  zoomin.classList.toggle('nth-of-type-active')
  zoomin.classList.toggle('zoomin')
}

/--------------------------------------------/;
/-----------------------10-------------------/;
/--------------------------------------------/;

let downrightupleft = document.querySelector('a:nth-of-type(10)')

downrightupleft.addEventListener('click', downrightupleftHandler)
downrightupleft.addEventListener('animationend', downrightupleftHandler)

function downrightupleftHandler() {
  downrightupleft.classList.toggle('nth-of-type-active')
  downrightupleft.classList.toggle('downrightupleft')
}


/--------------------------------------------/;
/-----------------------11-------------------/;
/--------------------------------------------/;

let events = document.querySelector('a:nth-of-type(11)')

events.addEventListener('click', eventsHandler)
events.addEventListener('animationend', eventsHandler)

function eventsHandler() {
  events.classList.toggle('nth-of-type-active')
  events.classList.toggle('events')
}

/--------------------------------------------/;
/-----------------------12-------------------/;
/--------------------------------------------/;

let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', interactionHandler)
interaction.addEventListener('animationend', interactionHandler)

function interactionHandler() {
  interaction.classList.toggle('nth-of-type-active')
  interaction.classList.toggle('interaction')
}

/--------------------------------------------/;
/-----------------------13-------------------/;
/--------------------------------------------/;

let flip = document.querySelector('a:nth-of-type(13)')

flip.addEventListener('click', flipHandler)
flip.addEventListener('animationend', flipHandler)

function flipHandler() {
  flip.classList.toggle('nth-of-type-active')
  flip.classList.toggle('flip')
}

// var cards = document.querySelectorAll('.card');

// [...cards].forEach((card)=>{
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });
// });