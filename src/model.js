let usersModel = []

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((users) => {
        users.forEach(user => {
            usersModel.push(user)
        });
    })

module.exports = usersModel 