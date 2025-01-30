const container = document.querySelector('.gameContainer');
const startBtn = document.querySelector('#startBtn')
const style = getComputedStyle(container);
const contWidth = style.width;
const contHeight = style.height;

startBtn.addEventListener('click', () => {
    const sqrsPerSide = +prompt('Total squares per side in grid? (Limit: 1 to 100)', 16);
    console.log(sqrsPerSide);
    if (sqrsPerSide){
        
    }
})