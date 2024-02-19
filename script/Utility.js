/** @format */

function setBackgroundColorInKeyboard(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-green-500", "text-black");
}

function eventBubble(seatName) {
  const tr = document.createElement("tr");
  tr.innerHTML = ` 
      <td>${seatName}</td>
      
      <td>
      </td>
    
    `;
  return tr;
}
