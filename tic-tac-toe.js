document.addEventListener("DOMContentLoaded", function() {
    console.log("Setting div elements... ");
    const elements = document.getElementsByTagName("div");
    for (let i = 3; i < elements.length - 1; i++) {
        elements[i].className = "square";
    }

    console.log("Setting squares... ");
    const square1= elements[3];
    const square2 = elements[4];
    const square3 = elements[5];
    const square4 = elements[6];
    const square5 = elements[7];
    const square6 = elements[8];
    const square7 = elements[9];
    const square8 = elements[10];
    const square9 = elements[11];

    var turn = 0;
    square1.onmouseover = function() { //when hovering over square1
        square1.classList.add("hover");
    }
    square1.onmouseout = function() {
        square1.classList.remove("hover");
    }
    square2.onmouseover = function() { //when hovering over square2
        square2.classList.add("hover");
    }
    square2.onmouseout = function() {
        square2.classList.remove("hover");
    }
    square3.onmouseover = function() { //when hovering over square3
        square3.classList.add("hover");
    }
    square3.onmouseout = function() {
        square3.classList.remove("hover");
    }
    square4.onmouseover = function() { //when hovering over square4
        square4.classList.add("hover");
    }
    square4.onmouseout = function() {
        square4.classList.remove("hover");
    }
    square5.onmouseover = function() { //when hovering over square5
        square5.classList.add("hover");
    }
    square5.onmouseout = function() {
        square5.classList.remove("hover");
    }
    square6.onmouseover = function() { //when hovering over square6
        square6.classList.add("hover");
    }
    square6.onmouseout = function() {
        square6.classList.remove("hover");
    }
    square7.onmouseover = function() { //when hovering over square7
        square7.classList.add("hover");
    }
    square7.onmouseout = function() {
        square7.classList.remove("hover");
    }
    square8.onmouseover = function() { //when hovering over square8
        square8.classList.add("hover");
    }
    square8.onmouseout = function() {
        square8.classList.remove("hover");
    }
    square9.onmouseover = function() { //when hovering over square9
        square9.classList.add("hover");
    }
    square9.onmouseout = function() {
        square9.classList.remove("hover");
    }

    square1.onclick = function() { //when clicking square1
        if  (turn == 0) {
            square1.classList.add("O");
            square1.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square1.classList.add("X");
            square1.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square2.onclick = function() { //when clicking square2
        if  (turn == 0) {
            square2.classList.add("O");
            square2.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square2.classList.add("X");
            square2.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square3.onclick = function() { //when clicking square3
        if  (turn == 0) {
            square3.classList.add("O");
            square3.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square3.classList.add("X");
            square3.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square4.onclick = function() { //when clicking square4
        if  (turn == 0) {
            square4.classList.add("O");
            square4.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square4.classList.add("X");
            square4.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square5.onclick = function() { //when clicking square5
        if  (turn == 0) {
            square5.classList.add("O");
            square5.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square5.classList.add("X");
            square5.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square6.onclick = function() { //when clicking square6
        if  (turn == 0) {
            square6.classList.add("O");
            square6.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square6.classList.add("X");
            square6.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square7.onclick = function() { //when clicking square7
        if  (turn == 0) {
            square7.classList.add("O");
            square7.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square7.classList.add("X");
            square7.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square8.onclick = function() { //when clicking square8
        if  (turn == 0) {
            square8.classList.add("O");
            square8.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square8.classList.add("X");
            square8.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }
    square9.onclick = function() { //when clicking square9
        if  (turn == 0) {
            square9.classList.add("O");
            square9.innerHTML = "O";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn++;
        }
        else {
            square9.classList.add("X");
            square9.innerHTML = "X";
            console.log("A square was clicked!");
            console.log("Turn value was: ", turn);
            turn--;
        }    
    }


    console.log("Squares set! Game ready... ");
})