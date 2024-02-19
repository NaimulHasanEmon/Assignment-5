// function handleSelect(seat) {
//   let select = document.getElementById();
//   setBackgroundColorInKeyboard("A1");
//   let seat = document.getElementById();
//   let seatName = "A1";
//   const tr = eventBubble(seatName);
//   document.getElementById("list-container").appendChild(tr);
// }

function handleSelect(seatId) {
    const element = document.getElementById(seatId);
    if (element.classList.contains("bg-green-500")) {
        removeBackgroundColorInKeyboard(seatId);
    } else {
        setBackgroundColorInKeyboard(seatId);
    }
}

// document.addEventListener("keyup", handleSelect());