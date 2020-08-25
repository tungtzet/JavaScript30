const removeTransition = (e) => {
  // console.log(e);
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const playSound = (e) => {
  // console.log(e);
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!sound) return;

  key.classList.add('playing');
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll('.key').forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);