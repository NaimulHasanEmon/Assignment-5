let count = 0;
let totalSeatLeft = 40;
function selected(button) {
  const element = button.classList;
  if (element.contains("bg-[#1DD100]")) {
    element.remove("bg-[#1DD100]");
    setInnerTextById("total-price", 550 * count);
  } else {
    let sName = document.getElementsByTagName(button.id);
    let seatName = button.innerText;
    const tr = eventBubble(seatName);
    document.getElementById("list-container").appendChild(tr);
    element.add("bg-[#1DD100]");
    count += 1;
    totalSeatLeft -= 1;
    setInnerTextById("total-price", 550 * count);
    seatUpdate();
    seatLeft();
  }
}