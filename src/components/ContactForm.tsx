import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import { useNavigate } from 'react-router-dom';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [status, setStatus] = useState('inactive');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;
    const newContact = { id, fname, lname, status };
    dispatch(addContact(newContact));
    setFname('');
    setLname('');
    setStatus('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md shadow-md m-auto">
      <input
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="First Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Last Name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <div className="flex items-center mb-2">
        <input
          className="mr-2 border rounded focus:outline-none focus:border-blue-500"
          type="radio"
          name="status"
          value="active"
          checked={status === 'active'}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label htmlFor="active" className="text-gray-700">
          Active
        </label>
      </div>
      <div className="flex items-center mb-4">
        <input
          className="mr-2 border rounded focus:outline-none focus:border-blue-500"
          type="radio"
          name="status"
          value="inactive"
          checked={status === 'inactive'}
          onChange={(e) => setStatus(e.target.value)}
        />
        <label htmlFor="inactive" className="text-gray-700">
          Inactive
        </label>
      </div>
      <button className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
