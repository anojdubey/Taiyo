import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../features/contacts/contactsSlice";

type Props = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  contact: any;
};

const EditModal: React.FC<Props> = ({ setShowModal, id, contact }) => {
  const dispatch = useDispatch();
  const [fname, setFname] = useState(contact?.fname);
  const [lname, setLname] = useState(contact?.lname);
  const [status, setStatus] = useState(contact?.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = { id, fname, lname, status };
    dispatch(editContact(newContact));
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">First Name</label>
          <input
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />

          <label className="block mb-2 font-medium">Last Name</label>
          <input
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />

          <label className="block mb-2 font-medium">Status</label>
          <div className="mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                className="mr-2 border rounded focus:outline-none focus:border-blue-500"
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
              />
              Active
            </label>
            <label className="inline-flex items-center cursor-pointer ml-4">
              <input
                className="mr-2 border rounded focus:outline-none focus:border-blue-500"
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
              />
              Inactive
            </label>
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
              type="submit"
            >
              Save Changes
            </button>
            <button
              className="ml-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
