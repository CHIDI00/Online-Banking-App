const front_viewBtn = document.getElementById('frontView');
const back_viewBtn = document.getElementById('backView');
const front_card = document.getElementById('front');
const back_card = document.getElementById('back');
const icons = document.querySelector('.change-icon');
const blur_balance = document.getElementById('blur');

const home_section = document.querySelector('.home-section')
const transfer_section = document.querySelector('.transfer-section')

// const pay_btn = document.getElementById('payBtn');
const transfer_btn = document.getElementById('transferBtn');

const close_transfer_section = document.getElementById('closeBtn');


back_viewBtn.addEventListener('click', ()=> {
    front_viewBtn.style.backgroundColor = '#000'
    back_viewBtn.style.backgroundColor = '#fff';
    front_card.style.display = 'none';
    back_card.style.display = 'block';  
    icons.style.display = 'flex';
})

front_viewBtn.addEventListener('click', ()=> {
    front_viewBtn.style.backgroundColor = '#fff';
    back_viewBtn.style.backgroundColor = '#000'; 
    front_card.style.display = 'block';
    back_card.style.display = 'none';
    icons.style.display = 'flex';
})

blur_balance.addEventListener('click', (e)=> {
    blur_balance.classList.toggle('active')
    // if (e.target.classList.contains('active')) {
    //     e.target.classList.toggle('active');
    // }
})


transfer_btn.addEventListener('click', () => {
    transfer_section.style.display = 'flex';
    home_section.style.display = 'none';
    console.log('clicked');
})

close_transfer_section.onclick = ()=> {
    transfer_section.style.display = 'none';
    home_section.style.display = 'flex';
    // transfer_section.style.transition = 
}
