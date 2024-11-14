import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"
const Contacts = () => {
  const [contacts, setContacts] = useState([{
    fullName:"Mehmet",
    phoneNumber:"123123"
  },{
    fullName:"Ayşe",
    phoneNumber:"432432"
  },{
    fullName:"Nazlı",
    phoneNumber:"543543"
  }]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
};

export default Contacts;
