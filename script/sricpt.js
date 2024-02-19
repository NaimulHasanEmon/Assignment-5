/** @format */

function handleSelect() {
  let select = document.getElementById("A1");
  setBackgroundColorInKeyboard("A1");
  let seatName = "A1";

  const tr = eventBubble(seatName);
  document.getElementById("list-container").appendChild(tr); // Append the table row to the ordered list
}
