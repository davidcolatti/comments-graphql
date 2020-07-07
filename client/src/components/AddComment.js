import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTACT } from '../graphql/mutations';

const AddComment = () => {
  const [addContact, { data }] = useMutation(ADD_CONTACT);

  function btnClick(e) {
    e.preventDefault();

    addContact({
      variables: {
        name: 'David',
        city: 'Boca',
        state: 'FL'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <button onClick={btnClick}>Add Comment</button>
    </div>
  );
};

export default AddComment;
