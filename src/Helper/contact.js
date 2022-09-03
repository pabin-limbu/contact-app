const NUM_CONTACTS = 100;
const firstNames = [
  "pabin",
  "alina",
  "sachin",
  "nishes",
  "sinja",
  "keshar",
  "harshit",
  "nanda",
  "rajen",
  "rinki"
];
const lastNames = [
  "limbu",
  "rai",
  "magar",
  "tamang",
  "gautam",
  "sing",
  "panday",
  "regmi",
  "gurung",
  "poudel"
];

//generate a random number between min and max.
const rand = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//generate name
const generateName = () =>
  `${firstNames[rand(firstNames.length - 1)]} ${
    lastNames[rand(lastNames.length - 1)]
  }`;

//generate phone number
const generatePhoneNumber = () =>
  `${rand(999, 100)}${rand(999, 100)}${rand(9999, 1000)}`;

//create person.
const createContact = () => ({
  name: generateName(),
  phone: generatePhoneNumber()
});

//compare two contact for alphabetizing.
export const compareName = (contact1, contact2) =>
  contact1.name > contact2.name;

const addKeys = (val, key) => ({ key, ...val });
// create array of length NUM_CONTACTS and alphabetize by name.
// aaray.from takes and array and create array- look more in docs.
export default Array.from({ length: NUM_CONTACTS }, createContact).map(addKeys);
