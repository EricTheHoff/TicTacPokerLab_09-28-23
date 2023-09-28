let player = `X`
let currentPlayer = document.querySelector("#current-player")

const play = (evt) => {
    let selectionSquares = evt.target
    selectionSquares.innerText = player
    if(player === `X`) {
        player = `O`
    } else {
        player =`X`
    }

    currentPlayer.innerText = player
    const winner = winningCombo()
    
    if(winner) {
        alert(`The winner is Player ${winner}!`)
    } else if(boardStateFull()) {
        alert(`It's a cat's game!`)
    }
}

let squares = document.querySelectorAll(".square")

for(const square of squares) {
    square.addEventListener("click", play)
}

const winningCombo = () => {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
   
    for(const line of winningLines) {
        const [a, b, c] = line
        const lineA = squares[a].innerText
        const lineB = squares[b].innerText
        const lineC = squares[c].innerText
    
        if(lineA !== `` && lineA === lineB && lineA === lineC) {
            return lineA
        }
        return undefined
    }
}

const boardStateFull = () => {
    for(const square of squares) {
        if(square.innerText === "") {
            return false
        }
    }
    return true
}

