let count = 0;
function selected(button) {
  const element = button.classList;
  if (element.contains("bg-[#1DD100]")) {
    element.remove("bg-[#1DD100]");
  } else {
    let sName = document.getElementsByTagName(button.id);
    let seatName = button.innerText;
    const tr = eventBubble(seatName);
    document.getElementById("list-container").appendChild(tr);
    element.add("bg-[#1DD100]");
    count += 1;
  }
}

function setInnerTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}