const gnb = document.querySelectorAll('.gnb > li')
const sub = document.querySelectorAll('.sub')
const bg = document.querySelector('.bg')
console.log(bg)
for(let i of sub){
    i.style.height = '0'
    i.style.overflow = 'hidden'
    i.style.transition = 'all 0.5s'
}
bg.style.height = '0'
bg.style.overflow = 'hidden'
bg.style.transition = 'all 0.5s'
for(let i of gnb){
    i.addEventListener('mouseover',()=>{
        for(let j of sub){j.style.height = '250px'}
        bg.style.height = '250px'
    })}
    for(let i of gnb){
        i.addEventListener('mouseout',()=>{
            for(let j of sub){j.style.height = '0'}
            bg.style.height = '0'
        })}
    //1. 모든 서브 숨기기
    //2. gnb 자식 li에 마우스를 올리면 자식 sub 보이기 (node관계처리)
    //3. gnb 자식 li에서 나가면 자식 sub 숨기기
    