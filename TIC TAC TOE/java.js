let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;
let count = 0;

let winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") {
            if (turn0) {
                box.innerHTML = "O";
                turn0 = false;
            } else {
                box.innerHTML = "X";
                turn0 = true;
            }
            box.disabled = true;
            count++;
            checkwinner();
        }
    });
});

const Showwinner = (winner) => {
    setTimeout(() => {
        alert(winner + " wins!");
        resetGame();
    }, 100);
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1value = boxes[pattern[0]].innerHTML;
        let pos2value = boxes[pattern[1]].innerHTML;
        let pos3value = boxes[pattern[2]].innerHTML;

        if (pos1value !== "" && pos2value !== "" && pos3value !== "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                Showwinner(pos1value);
                return;
            }
        }
    }
    if (count === 9) {
        setTimeout(() => {
            alert("It's a draw!");
            resetGame();
        }, 100);
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    turn0 = true;
    count = 0;
};

resetBtn.addEventListener("click", resetGame);