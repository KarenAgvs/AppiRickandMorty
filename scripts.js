const URL= 'https://rickandmortyapi.com/api/character/';
const main=document.querySelector("#main")
const characterOptions=document.querySelector("#characterOptions")
const allCharacters=document.querySelector('allCharacters')

function validateUrl(){
    fetch(URL)
    .then(response=>response.json())
    .then(data=>{
        data.results.map(items=> {
            const option=document.createElement('option')
            option.textContent=items.name
        });
    })
    .catch(error => console.log(error))

}

validateUrl()


function createCard(data){
    const bigCard=document.createElement('div');
    bigCard.classList.add('bigCard')
    const cardBackground=document.createElement('div');
    cardBackground.classList.add('cardBackground');
    const imgDiv=document.createElement('div');
    imgDiv.classList.add('imgDiv')
    const nameCharacter=document.createElement('p')
    nameCharacter.classList.add('nameCharacter')

    imgDiv.src=data.image;
    nameCharacter.textContent=data.name

    bigCard.appendChild(cardBackground);
    bigCard.appendChild(imgDiv);
    bigCard.appendChild(nameCharacter);
    main.appendChild(bigCard);

    
}

console.log('hola')