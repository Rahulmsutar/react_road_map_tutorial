import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
   const deleteHandler = (id)=>{
props.getContactId(id)
   };
const renderList = props.contacts.map((contact)=>{
    return (
       <ContactCard contact={contact} clickHandler={deleteHandler} key={contact.id}/>
    )
})


  return (
    <div className='ui celled list'>
        {renderList}
    </div>
  )
}

export default ContactList