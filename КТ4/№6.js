let users = [
    {id: 1, name: 'Alex', lastname: 'Wilgayam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34}
];

function addUser(name, lastname, age) {
    let newId = users[users.length - 1].id + 1;
    let newUser = {id: newId, name: name, lastname: lastname, age: age};
    users.push(newUser);
}

function updateUser(id, name, lastname, age) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = name;
            users[i].lastname = lastname;
            users[i].age = age;
            return;
        }
    }
    console.log(`Пользователь с id ${id} не найден`);
}

function deleteUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
            return;
        }
    }
    console.log(`Пользователь с id ${id} не найден`);
}


addUser("Emma", "Watson", 28);
addUser("Tom", "Holland", 25);
updateUser(2, "Steven", "Williams", 35);
deleteUser(1);
console.log(users);
