import user from './user.mjs';
export default class system {

    constructor() {
        this.users = [];
    }

    addUser(userid) {
        newUser = new user(userid);
        this.users.push(newUser);
    }

  }