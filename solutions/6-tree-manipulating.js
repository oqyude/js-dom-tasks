// BEGIN
export default (document) => {
  const divs = document.querySelectorAll('div');

  divs.forEach((div) => {
    const nodes = [...div.childNodes];

    nodes.forEach((node) => {
      if (node instanceof Text && node.textContent.trim() !== '') {
        const p = document.createElement('p');
        p.textContent = node.textContent.trim();
        node.replaceWith(p);
      }
    });
  });
};

// END
