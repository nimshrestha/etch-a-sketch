const container = document.querySelector('.gameContainer');
const startBtn = document.querySelector('#startBtn');

const style = getComputedStyle(container);

// slice() to remove 'px' from string returned to prevent NaN in calculations
const contWidth = style.width.slice(0, style.width.length-2);
console.log(`Container width: ${contWidth}`);
const contHeight = style.height.slice(0, style.height.length-2);
console.log(`Container height: ${contHeight}`);


startBtn.addEventListener('click', () => {
    const sqrsPerSide = +prompt('Total squares per side in grid? (Limit: 1 to 100)', 16);
    console.log(`Squares per side: ${sqrsPerSide}`);
    const totalSqrs = sqrsPerSide*sqrsPerSide;
    console.log(`Total Squares: ${totalSqrs}`);
    if (sqrsPerSide){
        for (i=0;i<totalSqrs;++i){
            const sqr = document.createElement('div');
            const sqrWidth = contWidth/sqrsPerSide;
            const sqrHeight = contHeight/sqrsPerSide;
            sqr.style.width = `${sqrWidth}px`;
            sqr.style.height = `${sqrHeight}px`;
            sqr.style.border = 'solid 1px black';
            container.appendChild(sqr);
            // check sqr width and height
            if(i == totalSqrs-1) {
                console.log(`Square Width: ${sqrWidth}`);
                console.log(`Square Height: ${sqrHeight}`);
            }
        }
        
    }
})
            
            