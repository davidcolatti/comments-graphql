import React from 'react';
import { useMutation, gql } from '@apollo/client';
import { ADD_CONTACT } from '../graphql/mutations';

const AddComment = () => {
  const [addContact] = useMutation(ADD_CONTACT, {
    update(cache, { data: { addContact } }) {
      cache.modify({
        fields: {
          contacts(existingContacts = []) {
            const newContactRef = cache.writeFragment({
              data: addContact,
              fragment: gql`
                fragment NewContact on Contact {
                  id
                  name
                  city
                  state
                }
              `
            });
            return [...existingContacts, newContactRef];
          }
        }
      });
    }
  });

  function btnClick() {
    addContact({
      variables: {
        name: 'David',
        city: 'Boca',
        state: 'FL'
      }
    });
  }

  return (
    <div>
      <button onClick={btnClick}>Add Comment</button>
    </div>
  );
};

export default AddComment;
