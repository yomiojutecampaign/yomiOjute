const Menu = document.getElementById('menu')
const info = document.getElementById('info')
const volunteerInput = document.getElementById('mce-MMERGE5')
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

volunteerInput.addEventListener('change',()=>{
    if(volunteerInput.value === 'Mobilization'){
        info.innerHTML = `<p>
       ${volunteerInput.value} - This involves reaching out to people through one-on-one strategy and other physical means.
        </p>`
    }else if(volunteerInput.value === 'Polling Unit Agent'){
        info.innerHTML = `<p>
       ${volunteerInput.value} - Help to man one of the 47 polling units in Ward D Bariga LCDA that's closest to your location..
        </p>`
    }
    else if(volunteerInput.value === 'Graphic Design'){
        info.innerHTML = `<p>
       ${volunteerInput.value} - Help to design campaign materials for publicity and marketing...
        </p>`
    }else if(volunteerInput.value === 'Logistics'){
        info.innerHTML = `<p>
        ${volunteerInput.value} - Help to ensure campaign materials are disbursed or placed where they ought to be. Logistics team will be responsible for the general leg work..
         </p>`
    }else if(volunteerInput.value === 'Social Media'){
        info.innerHTML = `<p>
        ${volunteerInput.value} - This team will be responsible for online campaign by designing and executing a workable strategy...
         </p>`
    }
})