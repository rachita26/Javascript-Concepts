var a = [
  { id: 2, name: "a" },
  { id: 3, name: "b" },
  { id: 4, name: "c" },
  { id: 5, name: "d" },
];
var officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
const temp = a.map((el) => el.id);
const officersIds = officers.map((officer) => officer.id);
console.log(temp);
console.log(officersIds);
