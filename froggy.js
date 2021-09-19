let body = document.querySelector('body')
let froggy = document.querySelector('.froggy')
let froggySpeak = document.querySelector('.froggy-speak')
let froggySprite = document.querySelector('.froggy-sprite')
let froggyContextMenu = document.querySelector('.froggy-contextmenu')



// Assignment 4



froggySprite.onclick = () =>{
    froggySpeak.style.visibility ='visible'
    setTimeout(() =>{
        froggySpeak.style.visibility ='hidden'
    }, 200)
}

// froggyJump

function froggyJump(){
    let topRandom = Math.abs(Math.random()*(window.innerHeight -290))
    let leftRandom = Math.abs(Math.random()*(window.innerWidth -290))
    
    froggy.style.top = `${topRandom}px`
    froggy.style.left = `${leftRandom}px`
}


froggySprite.ondblclick = ()=>{
  froggyJump()

}

let bodyWidth = body.clientWidth
let bodyHeight = body.clientHeight
let froggySpriteHeight = froggySprite.clientHeight
let froggySpriteWidth = froggySprite.clientWidth


// right click froggy

froggySprite.addEventListener('contextmenu', () =>{
    // preventDefault()
   
    setTimeout(() =>{
        froggyContextMenu.style.display ='block'
    }, 1000)
})


// window 




window.addEventListener('resize', froggyJump)









