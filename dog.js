let dog = {
  breed: "Border Collie",
  Sound: "Wooh",
  getBreed: () => {
    return this.breed;
  },
  getSound: function () {
    return this.Sound;
  }
};
console.log(dog.getBreed());
console.log(dog.getSound());