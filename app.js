function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('3digit pin: ', pin);
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('generated-pin').value = pin;
    // const displayPin = document.getElementById('generated-pin');
    // displayPin.value = pin;  
}


document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const number = event.target.innerText;
        let calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            calcInput.value = calcInput.value + number; // x = a ;  x = x + b;
        }

        /* const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber; */ // x = 10 ; y = x + y; x = y

    })

function varifyPin() {
    const generatedPin = document.getElementById('generated-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMsg = document.getElementById('varified-success');
    const failedMsg = document.getElementById('varified-failed');
    if (generatedPin == typedPin) {
        successMsg.style.display = 'block';
        failedMsg.style.display = 'none';
    } else {
        failedMsg.style.display = 'block';
        successMsg.style.display = 'none';
    }
}




