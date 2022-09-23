import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import React,{useState} from 'react';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  
  const [contacts, setContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addContact = (newContact) => {

    setContacts([...contacts, newContact]);
  }
  return (
    <div className="App">
      <Header />
      
      <ContactForm fnaddContact={addContact}/>
      <Contact data={contacts} />
    </div>
  );
};

export default App;
