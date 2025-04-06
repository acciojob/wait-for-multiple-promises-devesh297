const output = document.getElementById("output");
output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

function createRandomPromise(index) {
  const delay = Math.random() * 2 + 1; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: delay });
    }, delay * 1000);
  });
}
const startTime = performance.now();
const promises = [
  createRandomPromise(1),
  createRandomPromise(2),
  createRandomPromise(3),
];

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3); 
	
  output.innerHTML = "";


  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time.toFixed(3)}</td>
    `;
    output.appendChild(row);
  });

  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${totalTime}</strong></td>
  `;
  output.appendChild(totalRow);
});

