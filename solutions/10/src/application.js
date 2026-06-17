import escapeHtml from 'escape-html';

// BEGIN
export default () => {
  const form = document.querySelector('.feedback-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const email = escapeHtml(formData.get('email'));
    const name = escapeHtml(formData.get('name'));
    const comment = escapeHtml(formData.get('comment'));

    const result = document.createElement('div');
    result.innerHTML = `
      <p>Feedback has been sent</p>
      <div>Email: ${email}</div>
      <div>Name: ${name}</div>
      <div>Comment: ${comment}</div>
    `;

    form.replaceWith(result);
  });
};

// END
