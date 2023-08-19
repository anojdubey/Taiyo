import React from 'react'
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ContactDetails:React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const params=useParams();
    const id=params.id;
    const contact=contacts.find((contact)=>contact.id==Number(id));
    console.log(id);
    return (
        <div>
            Hii
            <h3>{contact?.fname}</h3>
            <h4>{contact?.lname}</h4>
            <h5>{contact?.status}</h5>
            <button>Edit</button>
        </div>
    )
}

export default ContactDetails
