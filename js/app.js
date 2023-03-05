const front_viewBtn = document.getElementById('frontView');
const back_viewBtn = document.getElementById('backView');
const front_card = document.getElementById('front');
const back_card = document.getElementById('back');
const icons = document.querySelector('.change-icon');
const blur_balance = document.getElementById('blur');
const home_section = document.querySelector('.home-section')
const transfer_section = document.querySelector('.transfer-section')
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

const pay_btn = document.getElementById('payBtn');
const close_payment_section = document.getElementById('closePayBtn');
const paySection = document.querySelector('.pay-section');
const main_body = document.querySelector('main-body');
pay_btn.addEventListener("click", paycenter)

close_payment_section.addEventListener('click', ()=> {
    paySection.style.display = "none";
    home_section.style.display = "flex"
})

function paycenter() {
    home_section.style.display = "none";
    paySection.style.display = "flex";
    let payment = document.createElement("div");
    payment.classList.add('pay-section');
    payment.innerHTML = `
        <div class="close-payBtn">
            <button id="closePayBtn"><i class="fa-solid fa-angle-left"></i></button>
        </div>
                                                                 

        <div class="Bills-buy">

            <div class="bill-container">
                <div class="bill-container-container">
                    <i class="fa-sharp fa-solid fa-money-bills"></i>
                    <p>Pay Bills</p>
                </div>
                <div class="bill-container-container">
                    <i class="fa-solid fa-cards-blank"></i>
                    <p>Buy Airtime</p>
                </div>
                <div class="bill-container-container">
                    <i class="fa-sharp fa-solid fa-money-bills"></i>
                    <p>Pay Bills</p>
                </div>
                <div class="bill-container-container">
                    <i class="fa-sharp fa-solid fa-money-bills"></i>
                    <p>Pay Bills</p>
                </div>
                <div class="bill-container-container">
                    <i class="fa-sharp fa-solid fa-money-bills"></i>
                    <p>Pay Bills</p>
                </div>
                <div class="bill-container-container">
                    <i class="fa-sharp fa-solid fa-money-bills"></i>
                    <p>Pay Bills</p>
                </div>
            </div>
            

        </div>
    </div>
    </div>
    `
    main_body.appendChild(payment)
}