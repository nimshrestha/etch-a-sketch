const container = document.querySelector('.gameContainer');
const btn = document.querySelector('#btn');
const style = getComputedStyle(container);

// slice() to remove 'px' from string returned to prevent NaN in calculations
const contWidth = style.width.slice(0, style.width.length-2);
console.log(`Container width: ${contWidth}`);
const contHeight = style.height.slice(0, style.height.length-2);
console.log(`Container height: ${contHeight}`);


btn.addEventListener('click', () => {
    if(btn.textContent === 'Start Sketching'){
        const sqrsPerSide = prompt('Total squares per side in grid? (Limit: 1 to 100)', 16);
        console.log(typeof(sqrsPerSide));
        console.log(`Squares per side: ${sqrsPerSide}`);
        const totalSqrs = sqrsPerSide*sqrsPerSide;
        console.log(`Total Squares: ${totalSqrs}`);
        if (sqrsPerSide > 0 && sqrsPerSide <= 100){
            for (let i=0;i<totalSqrs;++i){
                const sqr = document.createElement('div');
                sqr.classList.add('sqrs');
                const sqrWidth = contWidth/sqrsPerSide;
                const sqrHeight = contHeight/sqrsPerSide;
                sqr.style.width = `${sqrWidth}px`;
                sqr.style.height = `${sqrHeight}px`;
                sqr.style.border = 'solid 1px black';
                if(totalSqrs == 1){
                    sqr.style.border = 'none';
                }
                container.appendChild(sqr);
                // check sqr width and height
                if(i == totalSqrs-1) {
                    console.log(`Square Width: ${sqrWidth}`);
                    console.log(`Square Height: ${sqrHeight}`);
                }
            }
            btn.textContent = 'Reset';
        }
        else if (sqrsPerSide == null){}
        else alert('Invalid input');
        
    }
    else if(btn.textContent === 'Reset'){
        const decision = confirm('Are you sure you want to reset?');
        if(decision){
            console.log(`reset`);
            const sqrs = document.querySelectorAll('.sqrs');
            sqrs.forEach((sqr)=>sqr.remove());
            btn.textContent = 'Start Sketching';
            let clickEvent = new Event('click');
            btn.dispatchEvent(clickEvent);
        }
        else btn.textContent = 'Reset';
    }
}) 
            