// UserModel.js
class UserModel {
constructor() {
    this.users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    ];
}

findByCredentials(username, password) {
    return this.users.some((user) => user.username === username && user.password === password);
}
}

module.exports = UserModel;
