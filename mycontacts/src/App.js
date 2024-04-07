import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/nav-bar/nav-bar';
import ContactList from './components/contacts/contact-list/contactlist';
import AddContact from './components/contacts/Addcontact/Addcontact';
import ViewContact from './components/contacts/viewcontacts/ViewContacts';
import EditContact from './components/contacts/Editcontacts/EditContact';

let App = () => {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Router> */}
        <Routes>
          <Route path={'/'} element={<Navigate to ={'contacts/list'}/>} />
          <Route path={"/contacts/list"} element={<ContactList />} />
          <Route path={"/contacts/add"} element={<AddContact/>} />
          <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
          <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
        </Routes>
      {/* </Router> */}
    </React.Fragment>
  );
}

export default App;
