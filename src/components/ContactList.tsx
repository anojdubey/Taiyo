import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const navigate = useNavigate();

  return (
    <div className="w-full p-4">
      <button
        className="w-1/6 m-auto py-2 text-white bg-blue-500 rounded-md flex items-center justify-center mb-4"
        onClick={() => {
          navigate(`/add`);
        }}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Contact
      </button>
      <ul className="grid gap-4 grid-cols-3">
        {contacts.map((contact) => (
          <li key={contact.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center w-full">
            <span>{contact.fname}</span>
            <button
              className="text-blue-500 flex items-center"
              onClick={() => {
                navigate(`/details/${contact.id}`);
              }}
            >
              View Details
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
