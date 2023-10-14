class Users {
    constructor(usersArray = []) {
      this.users = new Map();
      usersArray.forEach(user => this.addUser(user));
    }
  
    addUser(user) {
      this.users.set(user.id, user);
    }
  
    getUserById(id) {
      return this.users.get(id);
    }
  }
  
  

 function memoize(fn) {
    const cache = new Map();
  
    return function (...args) {
      if (cache.has(args)) {
        return cache.get(args);
      } else {
        const result = fn(...args);
        cache.set(args, result);
        return result;
      }
    };
  }
  

  function removeDuplicates(arr){
    return [... new Set(arr)];
  }

 