const menu = document.querySelector('#menubar')
const menuList = document.querySelector('#menuList');
const socials = document.querySelector('#sos')
const more = document.getElementById('morebtn')
const portfolio = document.getElementById('port')
const access = document.querySelector('#portimg')
const temp = document.querySelector('#temp')
const disp = document.querySelector('#disp')
const cv =document.getElementById('cv');






menu?.addEventListener('click', ()=>{
    if(menuList.classList.contains('hidden')){
        menuList.classList.remove('hidden')
    }
    else{
        menuList.classList.add('hidden')

    }
});
socials?.addEventListener('click', ()=>{
    location.href='../public/handles.html'
})

more?.addEventListener('click', ()=>{
    location.href='../public/about.html'
})

portfolio?.addEventListener('click', ()=>{
    location.href='../public/portfolio.html'
})


cv?.addEventListener('click', ()=>{
    location.href='../docs/Dev-Resume.pdf';
})
