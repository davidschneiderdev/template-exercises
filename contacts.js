
const friends = require('./contacts.json');

function getContacts() {
    let result = '';
    for (let item of friends.contacts) {
        result += `
        <h1>${item.name}</h1>
        <h2>${item.phone}, ${item.email}</h2>`
    }
    return result;
}

module.exports = {
    getContacts
};