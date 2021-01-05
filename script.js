const Menu = document.getElementById('menu')
let openSide = false

Menu.addEventListener('click',()=>{
    const liMenu = document.getElementsByClassName('main-li')
    openSide = !openSide
    console.log(openSide)
    if(openSide){
        Array.from(liMenu).forEach((li) => {
            li.classList.add('slide')
         })
    }else{
        Array.from(liMenu).forEach((li) => {
            li.classList.remove('slide')
         })
    }
    
    
})