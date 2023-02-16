let arrayOfUsers;

window.onload = function() {
  getUsers()
  createCards()
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=20')
  .then(response => response.json())
  .then(users => arrayOfUsers = users)
}

const logUsers = () => {
  console.log(arrayOfUsers)
}

const createCards = () => {
  const cardWrapper = document.getElementById('cardWrapper')
  console.log(arrayOfUsers.results)
  arrayOfUsers.results.map(user => {
    const rows = document.createElement('div')
    rows.className = "row row-cols-4"
    const columns = document.createElement('div')
    columns.className = "col"
    const information = document.createTextNode(`Name: ${user.name}`)
    columns.appendChild(information)
    rows.append(columns)
    cardWrapper.append(rows)
  })
}