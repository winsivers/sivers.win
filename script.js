window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll-x', `${window.scrollY * 0.5}px`);
  document.body.style.setProperty('--scroll-y', `${window.scrollY * 0.5}px`);
});
