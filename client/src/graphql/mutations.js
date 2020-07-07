import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
  mutation addContact($name: String!, $city: String!, $state: String!) {
    addContact(name: $name, city: $city, state: $state) {
      name
      city
      state
    }
  }
`;
