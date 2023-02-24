const buttonPlus = document.getElementById('buttonPlus');
const hiddenContainer = document.getElementById('hidden-container');
const plusIcon = document.getElementById('plus');
const moinsIcon = document.getElementById('moins');

buttonPlus.addEventListener('click', function(){
  if (plusIcon.classList.contains('hidden')) {
    plusIcon.classList.remove('hidden');
    moinsIcon.classList.add('hidden');
    hiddenContainer.classList.add('hidden');
  } else {
    plusIcon.classList.add('hidden');
    moinsIcon.classList.remove('hidden');
    hiddenContainer.classList.remove('hidden');
  }
});