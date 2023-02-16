const cycleDivs = document.querySelectorAll('.cycle');
const cycleTitre = document.getElementById('cycle-titre');
const cycleDescription = document.getElementById('cycle-description');
const cycleSource = document.getElementById('cycle-source');

const imageTag = document.getElementById('cycle-image');

cycleDivs.forEach((div, index) => {
    div.addEventListener('mouseover', () => {
        div.style.cursor = 'pointer';
        div.style.background = 'linear-gradient(90deg, #FF79C6 0%, #6854EF 100%)';

    });

    div.addEventListener('mouseout', () => {
        div.style.cursor = 'default';
        div.style.background = '#161616';
    });
       
    div.addEventListener('click', () => {
        if(images[index].gras != []){
            cycleTitre.innerHTML = images[index].titre.replace(
                new RegExp(`(${images[index].gras.join('|')})`, 'g'),
                '<span style="color: #D36FD2">$1</span>'
              );
        }
        else{
            cycleTitre.innerHTML = images[index].titre;
        }
  
        cycleDescription.innerHTML = '';
        cycleSource.setAttribute('href', images[index].source[1]);

        cycleSource.innerHTML = images[index].source[0];
        imageTag.setAttribute('src', images[index].imageURL);

        div.querySelectorAll('p').forEach(p => {
            p.classList.remove('hidden');
        });

        cycleDivs.forEach((otherDiv) => {
            if (otherDiv !== div) {
              otherDiv.style.background = '#161616';
              otherDiv.querySelectorAll('p').forEach(p => {
                p.classList.add('hidden');
              });
            }
          });
          
    });
});



