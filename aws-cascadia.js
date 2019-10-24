/*
Given an array of objects that define a person’s name and their skills, write a javascript function that takes the given array and returns and object that maps each skill to an array of people that has that skill.
*/
/*
{"c": ["Brian", "Michael"],
  "c#": ["John", "Brian"],
  "c++": ["Brian", "Michael"],
  "css": ["John"],
  "go": ["Michael"],
  "html": ["John", "Brian"],
  "java": ["Brian"],
  "javascript": ["John", "Brian"],
  "rust": ["Michael"]
};
*/const data = [{
  id: 0,
  name: "John",
  skills: ["javascript", "html", "css", "c#"]
},
{
  id: 1,
  name: "Brian",
  skills: ["javascript", "java", "c", "c#", "c++", "html"]
},
{
  id: 2,
  name: "Michael",
  skills: ["c", "c++", "go", "rust"]
}
];
const sortAlphabetically = (a, b) => {
  const bb = b.toLowerCase();
  const aa = a.toLowerCase();
  if (aa < bb) {
    return -1;
  }
  if (aa > bb) {
    return 1;
  }
  return 0;
}
const bySkillsSorted = (people) => {
  const skills = people.reduce((acc, person) => {
    person.skills.map((skill) => {
      if (!acc[skill]) {
        acc[skill] = [person.name];
      } else {
        acc[skill] = [...acc[skill], person.name]
      }
    });
    return acc;
  }, {});
  const sortedKeys = Object.keys(skills).sort(sortAlphabetically);
  const sortedBySkills = {};
  sortedKeys.forEach((key) => {
    sortedBySkills[key] = skills[key].sort(sortAlphabetically);
  })
  return sortedBySkills;
}
let result = bySkillsSorted(data);
console.log(JSON.stringify(result));
