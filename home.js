function inputTextField(id) {
    const text = document.getElementById(id).innerText;
    return text;
}

function inputNumber(id) {
    const pin = document.getElementById(id).value;
    const pinNumber = parseInt(pin);
    return pinNumber;
}
function time() {
    const now = new Date();
    return now.toLocaleString('en-GB')
}

// cash out start
document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const inputAmmount = inputNumber('input-ammount');
    const inputpins = inputNumber('input-pin-cash-out');
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    if (isNaN(inputAmmount)) {
        alert('invalid input');
        return;
    }
    if (0 >= inputAmmount || mainBalance < inputAmmount) {
        alert("invalid input")
        return;

    }


    if (inputpins === 1234) {
        const balance = inputAmmount + mainBalance;
        const balanceNumber = parseFloat(balance);
        document.getElementById('main-balance').innerText = balanceNumber;

        const div = document.createElement('div');
        div.innerHTML = `
      <div class= "p-8 border rounded-lg mt-2 shadow-2xl bg-yellow-300 ">
      <p class = "text-xl font-bold ">${inputAmmount} Taka is  Cash out</p>
      <p class = "font-light">${time()} (Bangladesh Standard Time)</p>
                
            </div>
            
      `

        document.getElementById('history-section').appendChild(div);

        my_modal_5.showModal()
        const modal = document.getElementById('modal-taka');
        modal.innerHTML =`
        <p class ="text-2xl font-bold">${inputAmmount}</p>
        `
        
 
    }
})
// cash out start
//  send money start
// document.getElementById('sendmoney-btn').addEventListener('click',function(event){
//     event.preventDefault();
//     const inputAmmount = inputNumber('input-ammounts');
//     const inputpins = inputNumber('input-pin-send-money');
//     const mainBalance =  parseFloat(document.getElementById('main-balance').innerText);
//     if(isNaN(inputAmmount)){
//         alert('invalid input');
//         return;
//     }
//     if(0>=inputAmmount || mainBalance < inputAmmount ){
//         alert("invalid input")
//         return;

//     }



//     if(inputpins===1234){
//         const balance = mainBalance-inputAmmount;
//         const balanceNumber = parseFloat(balance);
//         document.getElementById('main-balance').innerText = balanceNumber; 


//         const div = document.createElement('div');
//         div.innerHTML = `< div class= "p-8 border rounded-lg mt-2 shadow-2xl bg-red-600" >
//       <p class = " font-bold ">${inputAmmount} Taka is  Send Money</p>
//       <p class = "font-light text-xs">${time()} (Bangladesh Standard Time)</p>
                
//             </div >

//             `

//       document.getElementById('history-section').appendChild(div);

//       my_modal_5.showModal()
//         const modal = document.getElementById('modal-taka');
//         modal.innerHTML =`
//         <p class ="text-2xl font-bold">${inputAmmount}</p>
//         `
//     }
// })

document.getElementById('sendmoney-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const inputAmmount = inputNumber('input-ammounts');
    const inputpins = inputNumber('input-pin-send-money');
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

    // Validate the input amount
    if (isNaN(inputAmmount)) {
        alert('Invalid input');
        return;
    }
    if (inputAmmount <= 0 || mainBalance < inputAmmount) {
        alert("Invalid input");
        return;
    }

    // Validate the pin number
    if (inputpins === 1234) {
        const balance = mainBalance - inputAmmount;  // Calculate new balance
        document.getElementById('main-balance').innerText = balance.toFixed(2); // Update the balance with two decimal places

        // Create and append the transaction history
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="p-8 border rounded-lg mt-2 shadow-2xl  bg-red-600">
                <p class="font-bold">${inputAmmount} Taka has been sent</p>
                <p class="font-light text-xs">${time()} (Bangladesh Standard Time)</p>
            </div>
        `;
        document.getElementById('history-section').appendChild(div);

        // Show modal with transaction details
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
        const modalTaka = document.getElementById('modal-taka');
        modalTaka.innerHTML = `
            <p class="text-2xl font-bold">${inputAmmount}</p>
        `;
    } else {
        alert('Incorrect PIN number');
    }
});



// send money end
document.getElementById('cash-out').addEventListener('click', function () {
    const showcashout = document.getElementById('cashout-section')
    const hidesendMoney = document.getElementById('sendMoney-section')
    const hidehistory = document.getElementById('history-section');

    showcashout.classList.remove('hidden');
    hidesendMoney.classList.add('hidden');
    hidehistory.classList.add('hidden');
    
    
    

    
});
document.getElementById('sendMoney').addEventListener('click', function () {
    const showsendMoney =document.getElementById('sendMoney-section')
    
    const hidecashout = document.getElementById('cashout-section')
    const hidehistory = document.getElementById('history-section')

    showsendMoney.classList.remove('hidden');
    hidecashout.classList.add('hidden');
    hidehistory.classList.add('hidden');

    
});
document.getElementById('history-btn').addEventListener('click', function () {
    const hidesendMoney =document.getElementById('sendMoney-section')
    
    const hidecashout = document.getElementById('cashout-section')
    const showhistory = document.getElementById('history-section')

    hidesendMoney.classList.add('hidden');
    hidecashout.classList.add('hidden');
    showhistory.classList.remove('hidden');

    
});








