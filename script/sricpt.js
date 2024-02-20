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

function coupon() {
  const couponCode = getInputValueById('input-coupon-code');
  if (couponCode === "NEW15") {
    setInnerTextById("grand-total", (550 * count) - (550 * count * 0.15));
  }
  else if (couponCode === "Couple 20") {
    setInnerTextById("grand-total", (550 * count) - (550 * count * 0.2));
  } else {
    setInnerTextById("grand-total", 0);
  }
}

function getInputValueById(inputFileId) {
  const inputField = document.getElementById(inputFileId);
  const value = inputField.value;
  return value;
}

function Successful() {
  
}