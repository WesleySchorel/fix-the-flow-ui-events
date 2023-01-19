let interaction = document.querySelector('a:nth-of-type(1)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

let colorChange = document.querySelector('a:nth-of-type(2)')

colorChange.addEventListener('mousedown', colorChangeHandler)
colorChange.addEventListener('animationend', colorChangeHandler)

function colorChangeHandler() {
  colorChange.classList.toggle('colorChange')
}



let rotation = document.querySelector('a:nth-of-type(3)')

rotation.addEventListener('mouseover', rotationHandler)
rotation.addEventListener('animationend', rotationHandler)

function rotationHandler() {
  rotation.classList.toggle('rotation')

}

let backflip = document.querySelector('a:nth-of-type(4)')

backflip.addEventListener('dblclick', backflipHandler)
backflip.addEventListener('animationend', backflipHandler)

function backflipHandler() {
  backflip.classList.toggle('backflip')
}





let groei = document.querySelector('a:nth-of-type(5)')

function groeiHandler() {
    groei.classList.toggle('groei')
}


groei.addEventListener('mouseup', groeiHandler)
groei.addEventListener('animationend', groeiHandler)












let rotation2 = document.querySelector('a:nth-of-type(6)')

rotation2.addEventListener('click', rotation2Handler)
rotation2.addEventListener('animationend', rotation2Handler)

function rotation2Handler() {
  rotation2.classList.toggle('rotation2')
}












let upsidedown = document.querySelector('a:nth-of-type(7)')

upsidedown.addEventListener('click', upsidedownHandler)

function upsidedownHandler() {
  upsidedown.classList.toggle('upsidedown')
}



let rotationwheel = document.querySelector('a:nth-of-type(8)')

rotationwheel.addEventListener('wheel', rotationwheelHandler)
rotationwheel.addEventListener('animationend', rotationwheelHandler)

function rotationwheelHandler() {
  rotationwheel.classList.toggle('rotationwheel')

}



let fadeout = document.querySelector('a:nth-of-type(9)')

fadeout.addEventListener('click', fadeoutHandler)
fadeout.addEventListener('animationend', fadeoutHandler)

function fadeoutHandler() {
  fadeout.classList.toggle('fadeout')

}




let bye = document.querySelector('a:nth-of-type(10)')

bye.addEventListener('click', byeHandler)
bye.addEventListener('animationend', byeHandler)

function byeHandler() {
  bye.classList.toggle('bye')

}



let everything = document.querySelector('a:nth-of-type(11)')

everything.addEventListener('click', everythingHandler)
everything.addEventListener('animationend', everythingHandler)

function everythingHandler() {
  everything.classList.toggle('everything')

}




function mouseDown() {
  document.getElementById("myButton").style.color = "#7ce7c9";
}

function mouseUp() {
  document.getElementById("myButton").style.color = "#9d7beb";
}