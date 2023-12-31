import React, { useState } from 'react';
import { RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import EditModal from './EditModal';
import { deleteContact } from '../features/contacts/contactsSlice';

const ContactDetails: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const params = useParams();
  const id = params.id;
  const contact = contacts.find((contact) => contact.id === Number(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" w-1/4 container m-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-2">{contact?.fname} {contact?.lname}</h1>
        <p className="text-gray-600 mb-4">{contact?.status}</p>
        
        <div className="flex items-center space-x-4">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-blue-600 transition-colors duration-300"
            type="button"
            onClick={() => setShowModal(true)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Edit
          </button>
          
          {contact && (
            <button
              onClick={() => {
                dispatch(deleteContact(contact?.id));
                navigate('/');
              }}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-red-600 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Delete
            </button>
          )}
        </div>
      </div>
      
      {showModal && <EditModal setShowModal={setShowModal} id={Number(id)} contact={contact} />}
    </div>
  );
};

export default ContactDetails;
