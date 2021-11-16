const URL= 'https://rickandmortyapi.com/api/character/';
const main=document.querySelector("#main")
const characterOptions=document.querySelector("#characterOptions")
const allCharacters=document.querySelector('#allCharacters')

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
    const cardBackground=document.createElement('div');
    const img=document.createElement('img');
    const nameCharacter=document.createElement('p');


    nameCharacter.classList.add('nameCharacter');
    img.classList.add('img');
    cardBackground.classList.add('cardBackground');
    bigCard.classList.add('bigCard')


    img.src=data.image;
    nameCharacter.textContent=data.name;

    bigCard.appendChild(cardBackground);
    bigCard.appendChild(img);
    bigCard.appendChild(nameCharacter);
    main.appendChild(bigCard);

    
}

characterOptions.addEventListener('change',renderCharacters )

function renderCharacters(){
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        const characterselected=characterOptions.value;
        if(characterselected===allCharacters.value){
            main.innerHTML="";
            return data.results.map(items => {
                createCard(items)
            })
        }
        else {
            return data.results.map(items => {
                if (items.name == characterselected) {
                    main.innerHTML = ""
                    createCard(items)
                }
            })
        }        
    })
    .catch(error => console.log(error))
}


console.log('hola')
console.log('Hola Karen, buenos dias')