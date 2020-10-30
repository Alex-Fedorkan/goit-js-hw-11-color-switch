let lastNumber;

const randomIntegerFromInterval = (min, max) => {
    
    const getRandomNumber = () => Math.floor(Math.random() * (max - min + 1) + min);
    
    const result = () => {
        const number = getRandomNumber();
        
        if (number === lastNumber) {
          return result();
        } 
        
        lastNumber = number;
        
        return number;
    };
    return result();
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyEl: document.querySelector('body'),
    startBtnEl: document.querySelector('[data-action="start"]'),
    stopBtnEl: document.querySelector('[data-action="stop"]')
};

let intervalId;

refs.stopBtnEl.disabled = true;

refs.startBtnEl.addEventListener('click', onStartBtnClick);
refs.stopBtnEl.addEventListener('click', onStopBtnClick);


function onStartBtnClick() {
    refs.startBtnEl.disabled = true;
    refs.stopBtnEl.disabled = false;

 intervalId = setInterval(changeColor, 1000);

}

function onStopBtnClick() {
    refs.startBtnEl.disabled = false;
    refs.stopBtnEl.disabled = true;

    clearInterval(intervalId);
}

function changeColor() {
    const colorIndex = randomIntegerFromInterval(0, colors.length - 1);

    refs.bodyEl.style.backgroundColor = colors[colorIndex];
}