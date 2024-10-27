let turn = 0;
let OX = "O";
let state = ["","","","","","","","",""];
let stateIndex = 0;

winner = function() {
    if (state[0] === state[1] && state[1] === state[2] && state[2] !== "") 
        {return state[0];}
    else if (state[3] === state[4] && state[4] === state[5] && state[5] !== "") 
        {return state[3];}
    else if (state[6] === state[7] && state[7] === state[8] && state[8] !== "") 
        {return state[6];}
    else if (state[0] === state[3] && state[3] === state[6] && state[6] !== "") 
        {return state[0];}
    else if (state[1] === state[4] && state[4] === state[7] && state[7] !== "") 
        {return state[1];}
    else if (state[2] === state[5] && state[5] === state[8] && state[8] !== "") 
        {return state[2];}
    else if (state[0] === state[4] && state[4] === state[8] && state[8] !== "") 
        {return state[0];}
    else if (state[2] === state[4] && state[4] === state[6] && state[6] !== "") 
        {return state[2];}
    else {
        return false;
    }

}

setGame = function() {
    const cells = document.getElementById("board");
    const status = document.getElementById("status");
    for (let cell of cells.children) {
        cell.classList.add("square");
        cell.setAttribute("id", `${stateIndex}`); 
        cell.onclick = function() {
            OX = (turn === 0) ? "O":"X";
            turn = (turn === 0) ? 1:0;

            if (cell.classList.contains("O")) {
                alert("An O was already placed here.")
            }
            else if (cell.classList.contains("X")) {
                alert("An X was already placed here.")
            }
            else {
                if  (OX === "O") {
                    cell.classList.add("O");
                    cell.innerHTML = "O";
                    position = Number(cell.getAttribute("id"));
                    state[`${position}`] = "O";
    
                }
                else {
                    cell.classList.add("X");
                    cell.innerHTML = "X";
                    position = Number(cell.getAttribute("id"));
                    state[`${position}`] = "X";
                }
                console.log("A cell was clicked!");
            }
            isWinner = winner();
            if (isWinner) {
                status.textContent = `Congratulations! ${isWinner} is the Winner!`;
                status.classList.add("you-won");
            }
        }
        stateIndex++;
        cell.onmouseover = function() { 
            cell.classList.add("hover");
        }
        cell.onmouseout = function() {
            cell.classList.remove("hover");
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Setting board... ");
    setGame();
    
})