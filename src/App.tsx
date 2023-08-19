import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import ContactDetails from './components/ContactDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        <Route path="/details/:id" element={<ContactDetails/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
