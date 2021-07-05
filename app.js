let modal = document.querySelector('.modal');
let btn = document.querySelector('.btn');
let exit = document.querySelector('.close');

btn.addEventListener('click', () => {
  modal.style.display = 'block';
});

exit.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
});