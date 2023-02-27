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

const consommationImage = document.getElementById('consommation-image');
const proportions = document.getElementById('proportions');
const volumes = document.getElementById('volumes');
const consommationText = document.getElementById('consommation-text');

proportions.style.background = 'linear-gradient(90deg, #FF79C6 0%, #6854EF 100%)';

volumes.addEventListener('click', function(){
  consommationImage.setAttribute('src', '../../src/images/consommation_03.png');
  proportions.style.background = '';
  volumes.style.background = 'linear-gradient(90deg, #FF79C6 0%, #6854EF 100%)';
  consommationText.innerHTML = 'Volume (en milliards de m3) et consommation d\'eau douce prélevée en fonction des secteurs d\'activité en 2018';

});

proportions.addEventListener('click', function() {
  consommationImage.setAttribute('src', '../../src/images/consommation_02.png');
  proportions.style.background= 'linear-gradient(90deg, #FF79C6 0%, #6854EF 100%)';
  volumes.style.background = '';
  consommationText.innerHTML = 'Volume et consommation d\'eau douce prélevée en fonction des secteurs d\'activité en 2018';

});