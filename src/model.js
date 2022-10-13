let usersList = []

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        users.forEach(user => {
            usersList.push(user)
        });
    })

module.exports = usersList 