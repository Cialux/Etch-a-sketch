const container = document.getElementById("squareContainer");
console.log(container);
for (let i = 0; i < 16; ++i) {
    for (let i = 0; i < 16; ++i) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', 
        e => e.target.classList.add('my-colour-class')
        )
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "etchSquares";
    }
}


