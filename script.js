const container = document.querySelector('.gameContainer');
const btn = document.querySelector('#btn');
const style = getComputedStyle(container);

// slice() to remove 'px' from string returned to prevent NaN in calculations
const contWidth = style.width.slice(0, style.width.length-2);
console.log(`Container width: ${contWidth}`);
const contHeight = style.height.slice(0, style.height.length-2);
console.log(`Container height: ${contHeight}`);


btn.addEventListener('click', () => {
    //start game logic
    if(btn.textContent === 'Start Sketching'){
        const sqrsPerSide = prompt('Total squares per side in grid? (Limit: 1 to 100)', 16);
        console.log(typeof(sqrsPerSide));
        console.log(`Squares per side: ${sqrsPerSide}`);
        const totalSqrs = sqrsPerSide*sqrsPerSide;
        console.log(`Total Squares: ${totalSqrs}`);
        // valid user input case
        if (sqrsPerSide > 0 && sqrsPerSide <= 100){
            for (let i=0;i<totalSqrs;++i){
                const sqr = document.createElement('div');
                sqr.classList.add('sqr');
                sqr.id = i;
                const sqrWidth = contWidth/sqrsPerSide;
                const sqrHeight = contHeight/sqrsPerSide;
                sqr.style.width = `${sqrWidth}px`;
                sqr.style.height = `${sqrHeight}px`;
                sqr.style.border = 'solid 1px black';
                sqr.style.backgroundColor = 'white';
                // No border if total squares is 1
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
        // invalid user input case
        else if (sqrsPerSide == null){}
        else alert('Invalid input');
        
    }
    //reset game logic
    else if(btn.textContent === 'Reset'){
        const decision = confirm('Are you sure you want to reset?');
        if(decision){
            console.log(`reset`);
            const sqrs = document.querySelectorAll('.sqr');
            sqrs.forEach((sqr)=>sqr.remove());
            btn.textContent = 'Start Sketching';
            let clickEvent = new Event('click');
            btn.dispatchEvent(clickEvent);
        }
        else btn.textContent = 'Reset';
    }
})

// sqr hover logic

container.addEventListener('mouseover', (event)=>{
    const targetSqr = event.target;
    if(targetSqr.className === 'sqr'){
        const clrRandomizer = () => Math.floor(Math.random()*201);
        // sqr bg color randomizer logic
        if(targetSqr.style.backgroundColor === 'white'){
            const sqrBgOpacity = 0.1;
            const sqrBgColor = `rgba(${clrRandomizer()},${clrRandomizer()},${clrRandomizer()},${sqrBgOpacity})`;
            
            targetSqr.style.background = sqrBgColor;
        }
        // sqr bg color opacity increase per hover logic (0.1/10% increase per hover)
        else {
            // get current sqr bg color opacity logic
            const style = getComputedStyle(targetSqr);
            const sqrBgOpacity = style.backgroundColor.slice(style.backgroundColor.length-4, style.backgroundColor.length-1);;
            // store current bg color opacity as number in new var
            let newSqrBgOpacity = +sqrBgOpacity;
            // increase per hover set to 0.1
            newSqrBgOpacity += 0.1;
            // set new sqr bg color opacity logic
            const newSqrBgColor = style.backgroundColor.replace(sqrBgOpacity,`${newSqrBgOpacity}`);
            targetSqr.style.backgroundColor = newSqrBgColor;
        }
    }
})
