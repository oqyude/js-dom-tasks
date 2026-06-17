import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = document.querySelectorAll('[data-autocomplete]');

  inputs.forEach((input) => {
    const name = input.dataset.autocompleteName;
    const list = document.querySelector(`ul[data-autocomplete-name="${name}"]`);

    input.addEventListener('input', async () => {
      const response = await fetch(`${input.dataset.autocomplete}?search=${input.value}`);
      const data = await response.json();
      const items = data.length === 0 ? ['Nothing'] : data;

      list.innerHTML = '';
      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
      });
    });
  });
  // END
};
