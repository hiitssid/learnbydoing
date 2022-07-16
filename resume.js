let download = document.getElementById('download');
download.addEventListener('click', () => window.print());

let toTop = document.getElementById('to-top');
toTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
