import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const navigate = useNavigate();

  return (
    <div>
      <button className="w-full py-2 text-white bg-blue-500 rounded-md" onClick={() => { navigate(`/add`) }}>Add Contact</button>
    <ul className="divide-y divide-gray-300">
      {contacts.map((contact) => (
        <li key={contact.id} className="p-4 flex justify-between items-center">
          <span>{contact.fname}</span>
          <button className="text-blue-500" onClick={() => { navigate(`/details/${contact.id}`) }}>
            View Details
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default ContactList;
