// function setBackgroundColorInKeyboard(elementId) {
//   const element = document.getElementById(elementId);
//   element.classList.add("bg-green-500", "text-black");
// }

// function eventBubble(seatName) {
//   const tr = document.createElement("tr");
//   let cls = 'Economy';
//   tr.innerHTML = `
//       <td>${seatName}</td>
//       <td>${cls}</td>
//       `
//   return tr;
// }

function setBackgroundColorInKeyboard(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-500", "text-black");
}

function removeBackgroundColorInKeyboard(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-green-500", "text-black");
}