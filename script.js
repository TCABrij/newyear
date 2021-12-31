const button = document.querySelector('button');
const curtContainer = document.querySelector('.curtain-container')

button.addEventListener('click', ()=>{
    openCurtain();
    const audio = document.querySelector('audio');
    audio.play();
    setTimeout(()=>{
        curtContainer.style.display = 'none'
    }, 2000)
})

function openCurtain(){
    const curtains = document.querySelectorAll('.curt');
    curtains.forEach( curtain =>{
        curtain.classList.add('open-curtain');
    })
}