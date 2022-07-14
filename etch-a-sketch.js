
let height = prompt("Height");
let width = prompt("Width");

if (width > 60) {
    alert("too wide, set to 60");
    width = 60;
}

let containerHeight = (height * 31)+"px";
let containerWidth = (width * 31)+"px";

const container = document.getElementById("squareContainer");

container.style.width = containerWidth;
container.style.height = containerHeight;

console.log(container);

for (let i = 0; i < height; ++i) {
    for (let i = 0; i < width; ++i) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', 
        e => e.target.classList.add('my-colour-class')
        )
        cell.innerText = (i + 1);
        container.appendChild(cell).className = "etchSquares";
    }
}


