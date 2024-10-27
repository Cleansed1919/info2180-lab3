let turn = 0;
let OX = "O";
let state = ["","","","","","","","",""];
let stateIndex = 0;

isWinner = function() {
    if (state[0] === state[1] && state[1] === state[2] && state[2] !== "") {
        console.log("Row Clear!");
        return state[0];
    }
    else if (state[3] === state[4] && state[4] === state[5] && state[5] !== "") {
        console.log("Row Clear!");
        return state[3];
    }
    else if (state[6] === state[7] && state[7] === state[8] && state[8] !== "") {
        console.log("Row Clear!");
        return state[6];
    }
    else if (state[0] === state[3] && state[3] === state[6] && state[6] !== "") {
        console.log("Column Clear!");
        return state[0];
    }
    else if (state[1] === state[4] && state[4] === state[7] && state[7] !== "") {
        console.log("Column Clear!");
        return state[1];
    }
    else if (state[2] === state[5] && state[5] === state[8] && state[8] !== "") {
        console.log("Column Clear!");
        return state[2];
    }
    else if (state[0] === state[4] && state[4] === state[8] && state[8] !== "") {
        console.log("Diagonal Clear!");
        return state[0];
    }
    else if (state[2] === state[4] && state[4] === state[6] && state[6] !== "") {
        console.log("Diagonal Clear!");
        return state[2];
    }
    else {
        return false;
    }

}

setGame = function() {
    let cells = document.getElementById("board");
    let status = document.getElementById("status");
    console.log("Board ready");
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
                    console.log("O in position: ", position);
    
                }
                else {
                    cell.classList.add("X");
                    cell.innerHTML = "X";
                    position = Number(cell.getAttribute("id"));
                    state[`${position}`] = "X";
                    console.log("X in position: ", position);
                }
            }
            if (isWinner() != false) {
                status.textContent = `Congratulations! ${isWinner()} is the Winner!`;
                status.classList.add("you-won");
                console.log("A winner has been decided.");
                console.log("Game end.");
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
    let resetBoard = document.getElementsByClassName("btn");
    resetBoard[0].onclick = function () {
        state = ["","","","","","","","",""];
            let cells = document.getElementById("board");
            let status = document.getElementById("status");
            for (let cell of cells.children) {
                if (cell.classList.contains("O")) {
                    cell.classList.remove("O");
                }
                if (cell.classList.contains("X")) {
                    cell.classList.remove("X");
                }   
            cell.innerHTML = "";
            status.textContent = "Move your mouse over a square and click to play an X or an O";
            status.classList.remove("you-won");  
            }
            console.log("Reset Board");
        };
    } 
    
)