import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import Sidebar from './components/SideBar';
import Charts from './components/Charts';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import ContactDetails from './components/ContactDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        height: '100vh'
      }}>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<ContactForm />} />
          <Route path="/details/:id" element={<ContactDetails/>} />
          <Route path="/charts" element={<Charts/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
