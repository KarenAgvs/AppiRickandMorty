const URL= 'https://rickandmortyapi.com/api/character/';
const main=document.querySelector(main)

function validateUrl(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>)
}


function  createCard();{
    const bigCard=document.createElement('div');
    bigCard.classList.add('bigCard')
    const cardBackground=document.createElement('div');
    cardBackground.classList.add('cardBackground');
    const imgDiv=document.createElement('div');
    imgDiv.classList.add('imgDiv')
    const nameCharacter=document.createElement('p')
    nameCharacter.classList.add('nameCharacter')

    bigCard.appendChild(cardBackground);
    bigCard.appendChild(imgDiv);
    bigCard.appendChild(nameCharacter);
    main.appendChild(bigCard);
}

createCard();