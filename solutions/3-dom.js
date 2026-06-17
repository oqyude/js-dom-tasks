// BEGIN
const lines = document.body.innerHTML
  .trim()
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line !== '');

document.body.innerHTML = lines.map((line) => `<p>${line}</p>`).join('\n');
// END
