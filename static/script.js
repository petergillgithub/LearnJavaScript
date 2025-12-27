// static = keyword that defines properties or methods that belong to a class itself rather than the object created
//          from that class (class anythis static, not the object)

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserOnline() {
    console.log(`There are ${this.userCount} user Online`);
  }
  sayHello() {
    console.log(`Hell, My name is ${this.username}`);
  }
}

const user1 = new User("SpongeBob");
const user2 = new User("Peter");
const user3 = new User("anil");

// console.log(user1.username);
user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserOnline();

// console.log(User.userCount);
