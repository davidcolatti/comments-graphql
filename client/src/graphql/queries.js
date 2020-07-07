import { gql } from '@apollo/client';

export const GET_CONTACTS = gql`
  query GetContacts {
    contacts {
      name
      city
      state
    }
  }
`;
