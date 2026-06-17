export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator');
  const alerts = document.querySelector('.alerts');
  let counter = 1;

  button.addEventListener('click', () => {
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-primary');
    alert.textContent = `Alert ${counter}`;
    alerts.prepend(alert);
    counter += 1;
  });
  // END
};
