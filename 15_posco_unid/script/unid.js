const h_bg = document.querySelector('#h_bg')
const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub1')
const sub_bg = document.querySelector('.nav_bg')
const active = document.querySelectorAll('sub1 > li')
// console.log(gnb,sub,bg)
//1.모두숨기기
sub_func('none')
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        sub_func('block','#fff')
        i.children[1].style.background = '#eee'
        i.children[0].style.color = '#003a14'
        
    })
    //2. gnb 마우스 나갈 시 sub, sub_bg 숨기기
    i.addEventListener('mouseout',()=>{
        sub_func('none','rgba(255,255,255,0.6)')
        i.children[1].style.background = '#fff'
        i.children[0].style.color = '#000'
    })
}
//함수
function sub_func(value,bg){
    h_bg.style.background = bg
    sub_bg.style.display = value
    for(let i of sub){i.style.display = value}
}
