const front_viewBtn = document.getElementById('frontView');
const back_viewBtn = document.getElementById('backView');
const front_card = document.getElementById('front');
const back_card = document.getElementById('back');
const icons = document.querySelector('change-icon');
const blur_balance = document.getElementById('blur');



back_viewBtn.addEventListener('click', ()=> {
    front_viewBtn.style.backgroundColor = '#fff'
    back_viewBtn.style.backgroundColor = '#000';
    front_card.style.display = 'none';
    back_card.style.display = 'block';  
    icons.style.display = 'flex';
})

front_viewBtn.addEventListener('click', ()=> {
    front_viewBtn.style.backgroundColor = '#000';
    back_viewBtn.style.backgroundColor = '#fff'; 
    front_card.style.display = 'block';
    back_card.style.display = 'none';
    icons.style.display = 'flex';
})

blur_balance.addEventListener('click', (e)=> {
    if (e.target.classList.contains('active')) {
        e.target.classList.toggle('active');
    }
})