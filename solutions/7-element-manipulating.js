import camelCase from 'lodash/camelCase';

// BEGIN
export default (document) => {
  const elements = document.body.getElementsByTagName('*');

  [...elements].forEach((element) => {
    const classes = [...element.classList];

    classes.forEach((className) => {
      element.classList.replace(className, camelCase(className));
    });
  });
};

// END
