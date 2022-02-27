console.log('App.js marche')

function cliquez() {
  // console.log("Type d'event ", event.type)
  console.log('On a clické sur le button')
}

var button = document.querySelector('.click-me')
button.onclick = cliquez

var button3 = document.querySelector('.click-me-3')

function click3() {
  button3.style.background = 'blue'
  button3.style.color = 'white'
  console.log('Click 3')
}

button3.addEventListener('mouseout', click3)
button3.removeEventListener('mouseout', click3)

// faites des recherches sur Event propagation et Event Delegate
