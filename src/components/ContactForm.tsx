import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [status, setStatus] = useState('inactive');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id=Math.floor(Math.random() * 10000) + 1;
    const newContact = {id, fname,lname,status };
    dispatch(addContact(newContact));
    setFname('');
    setLname('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md">
      <input
        className="w-full p-2 mb-2 border rounded-md"
        type="text"
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded-md"
        type="text"
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded-md"
        type="radio"
        placeholder="Status"
        value={"active"}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="w-full py-2 text-white bg-blue-500 rounded-md" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
