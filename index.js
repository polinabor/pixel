let btn_draw = document.querySelector('.nav-item')
let field_container = document.querySelector('.field-container')

function scrollDown(e) {
    e.preventDefault()
    field_container.style.display = 'flex'
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
btn_draw.addEventListener('click', scrollDown)

let CURRENT_COLOR = 'rgba(198, 57, 57, 0.79)'
let DEFAULT_COLOR = 'rgb(38, 38, 38)'

let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `cell${i}`)
    field.appendChild(cell)

}

let IS_CLICKED = false

document.addEventListener('mousedown', function(){
    IS_CLICKED = true
})

document.addEventListener('mouseup', function(){
    IS_CLICKED = false
})

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener('mouseover', function(){
        if (IS_CLICKED)
            cell.style.backgroundColor = CURRENT_COLOR
        })
    
    
    cell.addEventListener('mousedown', function(){
        cell.style.backgroundColor = CURRENT_COLOR
    })
})




let red = document.querySelector('.red')
red.addEventListener('click', function(){
   CURRENT_COLOR = 'rgba(198, 57, 57, 0.79)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   red.classList.add('selected')
})

let orange = document.querySelector('.orange')
orange.addEventListener('click', function(){
   CURRENT_COLOR = 'rgb(220, 156, 38)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   orange.classList.add('selected')
})

let yellow = document.querySelector('.yellow')
yellow.addEventListener('click', function(){
   CURRENT_COLOR = 'rgb(220, 191, 43)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   yellow.classList.add('selected') 
})

let green = document.querySelector('.green')
green.addEventListener('click', function(){
   CURRENT_COLOR = 'rgb(88, 122, 13)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   green.classList.add('selected') 
})

let blue = document.querySelector('.blue')
blue.addEventListener('click', function(){
   CURRENT_COLOR = 'rgb(23, 90, 183)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   blue.classList.add('selected') 
})

let white = document.querySelector('.white')
white.addEventListener('click', function(){
   CURRENT_COLOR = 'rgb(247, 246, 240)'
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   white.classList.add('selected') 
})

let rub = document.querySelector('.rub')
rub.addEventListener('click', function(){
   CURRENT_COLOR = DEFAULT_COLOR
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   rub.classList.add('selected') 
})

let save = document.querySelector('.save')
save.addEventListener('click', function(){
   let selected = document.querySelector('.selected')
   selected.classList.remove('selected')
   save.classList.add('selected') 
})

document.querySelector('.save').addEventListener('click', function(){
    domtoimage.toJpeg(field, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
})