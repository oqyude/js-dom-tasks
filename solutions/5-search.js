export default (document) => {
  // BEGIN
  const content = document.querySelector('.content');
  const links = content.querySelectorAll('.links > div');

  const items = [...links].map((link) => ({
    title: link.querySelector('a').textContent.trim(),
    description: link.querySelector('p').textContent.trim(),
  }));

  return {
    title: content.querySelector('h1').textContent.trim(),
    description: content.querySelector('.description').textContent.trim(),
    items,
  };
  // END
};
