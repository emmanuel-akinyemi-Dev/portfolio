const menu = document.querySelector('#menubar')
const menuList = document.querySelector('#menuList')



menu.addEventListener('click', ()=>{
    if(menuList.classList.contains('hidden')){
        menuList.classList.remove('hidden')
    }
    else{
        menuList.classList.add('hidden')
        
    }
});

