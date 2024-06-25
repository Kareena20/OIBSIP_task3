const tempInput = document.getElementById('temp');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');

convertBtn.addEventListener('click', () =>{
    const temp = parseFloat(tempInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;
    let result;

    if(from === 'C' && to === 'F'){
        result = (temp * 9/5) + 32;
    }else if(from === 'F' && to === 'C'){
        result = (temp - 32) *5/9;
    }else{
        result = temp;
    }

    resultPara.textContent = `The temperature is ${result.toFixed(2)} ${to}`;
});

