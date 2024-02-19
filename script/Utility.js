function eventBubble(seatName) {
  const tr = document.createElement("tr");
  let cls = 'Economy';
  tr.innerHTML = ` 
      <td>${seatName}</td>
      <td>${cls}</td>
      `
  return tr;
}