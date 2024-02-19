function eventBubble(seatName) {
  const tr = document.createElement("tr");
  let cls = 'Economy';
  const price = 550;
  tr.innerHTML = `
          <td class = "pr-20">${seatName}</td>
          <td class = "pr-20">${cls}</td>
          <td>${price}</td>
      `;
  return tr;
}