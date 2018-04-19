let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    //mode buttons eventListeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        colorDisplay.textContent = pickedColor;
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Wygrałeś!";
                changeColors(clickedColor);
                h1.style.background = pickedColor;
                resetButton.textContent = "Nowa Gra";  
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function reset(){
        //tworzy nowy array z kolorami
        colors = generateRandomColors(numSquares);
        //wybiera nowy random szukany kolor
        pickedColor = pickColor();
        //wyświetla, który kolor jest szukany w rgb
        colorDisplay.textContent = pickedColor;
        //zmienia kolory kwadratów i tło (h1 na domyślny);
         //ustawia wyświetlanie przycisku reset
        resetButton.textContent = "Reset Kolorów";
        //ustawia wyświetlanie wiadomości o stanie gry
        messageDisplay.textContent = "";
        for (let i = 0; i < squares.length; i++){
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            } else {
                squares[i].style.display = "none";
            }
            h1.style.background = "steelblue";
        };

}

resetButton.addEventListener("click", function(){
    reset();
});

//Po kliknięci właściwego koloru, zmienia wszystkie squares na ten kolor
function changeColors(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    } 
}

//z wygenerowanych random kolorów wybiera jeden, który trzeba zgadnąć
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

// tworzy określoną ilość random kolorów w tablicy
function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++){
        randomColor();
        arr.push(randomColor());
    }
    return arr;
}

//tworzy random kolor w formacie rgb
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = "rgb(" + r + ", " + g + ", " + b + ")"
    return rgb;
}






