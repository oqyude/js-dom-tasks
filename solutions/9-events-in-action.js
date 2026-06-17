export default () => {
  // BEGIN
  const tabs = document.querySelectorAll('[data-bs-toggle]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const nav = tab.closest('.nav');
      const currentTabs = nav.querySelectorAll('[data-bs-toggle]');

      currentTabs.forEach((currentTab) => {
        currentTab.classList.remove('active');

        const target = document.querySelector(currentTab.dataset.bsTarget);
        target.classList.remove('active');
      });

      tab.classList.add('active');
      const target = document.querySelector(tab.dataset.bsTarget);
      target.classList.add('active');
    });
  });
  // END
};
