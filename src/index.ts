import { ApolloServer, gql } from 'apollo-server';

let contacts = [
  {
    id: '1',
    name: 'Homer Simpson',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'Florida',
    zip: '33333'
  },
  {
    id: '2',
    name: 'Mr. Burns',
    address: '1000 Mammon Lane',
    city: 'Parkland',
    state: 'Florida',
    zip: '33076'
  },
  {
    id: '3',
    name: 'Moe Szyslak',
    address: '57 Walnut St.',
    city: 'Tamarac',
    state: 'Florida',
    zip: '33068'
  },
  {
    id: '4',
    name: 'W. Seymour Skinner',
    address: '330 Pikeland Ave.',
    city: 'Pompano',
    state: 'Florida',
    zip: '33067'
  },
  {
    id: '5',
    name: 'Waylon Joseph Smithers Jr.',
    address: '333 Pikeland Ave.',
    city: '	Wilton Manors',
    state: 'Florida',
    zip: '33305'
  }
];

let typeDefs = gql`
  type Contact {
    id: String
    name: String
    address: String
    city: String
    state: String
    zip: String
  }
  type Query {
    contacts: [Contact]
  }
  type Mutation {
    addContact(name: String, city: String, state: String): Contact!
    editContact(id: String, name: String, city: String, state: String): Contact!
  }
`;

interface Contact {
  id: String;
  name: String;
  state: String;
  city: String;
}

let mockDB: Contact[] = contacts;

let resolvers = {
  Query: {
    contacts: () => mockDB
  },
  Mutation: {
    addContact(_: any, { name, state, city }: Contact) {
      const contact = {
        id: Math.floor(Math.random() * 100000).toString(),
        name,
        city,
        state
      };

      mockDB.push(contact);

      return contact;
    },
    editContact(_: any, variables: Contact) {
      let i: number = 0;
      let contact = mockDB.find((each, index) => {
        i = index;
        return each.id === variables.id;
      });

      const newContact = { ...contact, ...variables };

      mockDB[i] = newContact;

      return newContact;
    }
  }
};

let server = new ApolloServer({ typeDefs, resolvers });
server.listen({ host: '127.0.0.1', port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
