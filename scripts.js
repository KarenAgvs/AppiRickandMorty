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
            characterOptions.appendChild(option)
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
    imgDiv.classList.add('imgDiv');
    const nameCharacter=document.createElement('p');
    nameCharacter.classList.add('nameCharacter');

    imgDiv.src=data.image;
    nameCharacter.textContent=data.name;

    bigCard.appendChild(cardBackground);
    bigCard.appendChild(imgDiv);
    bigCard.appendChild(nameCharacter);
    main.appendChild(bigCard);

    
}

characterOptions.addEventListener('change',renderCharacters )

function renderCharacters(){
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const characterselected=characterOptions.value;
        if(characterselected==allCharacters.value){
            main.innerHTML="";
            return data.results.map(items => {
                createCard(items)
            })
        }
        else {
            return data.results.map(items => {
                if (items.name === op) {
                    main.innerHTML = ""
                    createCard(items)
                }
            })
        }        
    })
    .catch(error => console.log(error))
}

renderCharacters()

console.log('hola')