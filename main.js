window.onload = function() {
    getUsers();
}
let arrayRes;
const getUsers = () => {
    fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
        .then(users => {
            createCards(users.results)
            arrayRes = users.results;
        })
        
}

const logUsers = () => {
    console.log(arrayRes)
}

const createCards = (arr) => {
    
    const cardList = document.getElementById('cardList');
    arr.map((user, index) => {   
        const li = document.createElement('li');
        const cardPicture = document.createElement('img');
        cardPicture.src = user.picture.medium;
        const cardName = document.createTextNode(`#${index+1} Name: ${user.name.first + ' ' + user.name.last}`);
        const cardButton = document.createElement('button');
        cardButton.class = 'btn btn-primary info-button';
        cardButton.innerHTML = 'Show more';
        cardButton.onclick = () => { li.appendChild(document.createTextNode(`Date of Birth: ${user.dob.date}, Email: ${user.email}, Gender: ${user.gender}`))
                                    cardButton.disabled = true;
                                     }
        li.appendChild(cardPicture);
        li.appendChild(cardName);
        li.appendChild(cardButton);
        cardList.append(li);

    })
}
        