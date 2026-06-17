// BEGIN
export default (element) => {
  const body = element.querySelector('body');
  const paragraphs = body.querySelectorAll('p');
  return [...paragraphs].map((paragraph) => paragraph.textContent.trim());
};

// END
