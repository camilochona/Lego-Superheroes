const modal = document.querySelector('.modal')
    const closeButton = document.querySelector('#close')
    
const spiderman = document.querySelector('#spiderman')
const robin = document.querySelector('#robin')
const batman = document.querySelector('#batman')

const buttons = Array.of(spiderman, robin, batman)

buttons.forEach((button) => {
    button.addEventListener('click', () => {
         modal.classList.remove('hidden')
         modal.classList.remove('visible')
    })
})    

closeButton.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
})