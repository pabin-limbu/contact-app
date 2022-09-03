import ContactRow from "./ContactRow";

const ContactList = (props) => {
  //ALGORITHM -go through the array, turn that into an object where the keys in object is the first letter of the value.
  //same letter bhako name ko first letter lai key banayera value ma chai array of same letter bhako contact rakhe. ex {A:[{name:"alina"},{name:"asha"}]}
  const contactsByLetter = props.contacts.reduce((obj, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact]
    };
  }, {});
  //ALGORITHM - since contact by key bhaneko onject ho jasko key chai letter and value chai array of those letter ko word.
  // object.keys garera harek obj ko key lai lena and new array ma tyo key lai title ma rakhne and data ma chai contact by letter obj ko index use garera array extract garne.
  const section = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter]
    }));

  return (
    <div>
      <ContactRow section={section} />
    </div>
  );
};

export default ContactList;
