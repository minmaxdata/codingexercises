class Person {
  constructor(id) {
    this.id = id;
    this.friends = [];
  }
  addFriend(friend) {
    this.friends.push(friend);
  }
}

const intersects = function (setA, setB) {
  if (setA.size > setB.size) {
    // Iterate the smaller set for efficiency.
    [setA, setB] = [setB, setA];
  }

  for (var elem of setA) {
    if (setB.has(elem)) {
      return true;
    }
  }
  return false;
};

const befriend = function (personA, personB) {
  personA.addFriend(personB);
  personB.addFriend(personA);
};

const getFriends = function (people) {
  const allFriends = new Set();
  people.forEach((person) => {
    person.friends.forEach((friend) => {
      allFriends.add(friend);
    });
  });
  return allFriends;
};

const calculateDegreesOfSeparation = function calculateDegreesOfSeparation(personA, personB) {
  if (personA === personB) {
    return 0;
  }

  let friendsA = new Set([personA]);
  let friendsB = new Set([personB]);
  let depth = 1;
  while (friendsA.size > 0 && friendsB.size > 0) {
    friendsA = getFriends(friendsA);
    if (intersects(friendsA, friendsB)) {
      return depth;
    }
    depth += 1;

    friendsB = getFriends(friendsB);
    if (intersects(friendsA, friendsB)) {
      return depth;
    }
    depth += 1;
  }
  return -1;
};


// casual testing...

let joe = new Person('joe');
let frank = new Person('frank');
let harry = new Person('harry');
let joanie = new Person('joanie');
let harriet = new Person('harriet');
let carrie = new Person('carrie');
befriend(joe, frank); // joe <--> frank
befriend(frank, joanie); // joe <--> frank <--> joanie
befriend(joanie, carrie); // joe <--> frank <--> joanie <--> carrie
befriend(carrie, harriet); // joe <--> frank <--> joanie <--> carrie <--> harriet

console.log(calculateDegreesOfSeparation(joe, joe) === 0, 'should be no degrees of separation');
console.log(calculateDegreesOfSeparation(joe, frank) === 1, 'should be 1 degree of separation');
console.log(calculateDegreesOfSeparation(joe, joanie) === 2, 'should be 2 degrees of separation');
console.log(calculateDegreesOfSeparation(joe, carrie) === 3, 'should be 3 degrees of separation');
console.log(calculateDegreesOfSeparation(joe, harriet) === 4, 'should be 4 degrees of separation');
console.log(calculateDegreesOfSeparation(frank, joe) === 1, 'should be 1 degree of separation');
console.log(calculateDegreesOfSeparation(joanie, joe) === 2, 'should be 2 degrees of separation');
console.log(calculateDegreesOfSeparation(carrie, joe) === 3, 'should be 3 degrees of separation');
console.log(calculateDegreesOfSeparation(harriet, joe) === 4, 'should be 4 degrees of separation');

