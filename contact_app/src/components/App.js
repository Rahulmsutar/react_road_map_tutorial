import React, { useState, useEffect } from 'react';
// import uuid from 'react-uuid'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  let LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])


  const addContactHandler = (contact) => {
    // console.log(contacts)
    setContacts([...contacts, { id: uuidv4(), ...contact }])
  }

  const removeContact = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contacts.id !== id
    })
    setContacts(newContactList)
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retriveContacts)
    if (retriveContacts)
      setContacts(retriveContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])



  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {removeContact}/>
    </div>
  );
}

export default App;
