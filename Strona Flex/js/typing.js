const headerTxt = document.querySelector(".header__title");
const spnCursor = document.querySelector(".header__cursor");
const txt = "Welcome";


let indexText = 0;
const time = 120;



const addLetter = () => {
    headerTxt.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);


}
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}


const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);