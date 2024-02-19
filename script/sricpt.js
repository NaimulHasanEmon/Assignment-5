function selected(button) {
  const element = button.classList;
  if (element.contains("bg-green-500")) {
    element.remove("bg-green-500");
  } else {
    let sName = document.getElementsByTagName(button.id);
    let seatName = button.innerText;
    const tr = eventBubble(seatName);
    console.log(seatName);
    document.getElementById("list-container").appendChild(tr);
    element.add("bg-green-500");
  }
}