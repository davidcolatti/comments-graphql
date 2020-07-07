import { ApolloServer, gql } from 'apollo-server';

let typeDefs = gql`
  type Contact {
    name: String
    address: String
    city: String
    state: String
    zip: String
  }
  type Query {
    contacts: [Contact]
  }
`;

let resolvers = {
  Query: {
    contacts: () => contacts
  }
};

let contacts = [
  {
    name: 'Homer Simpson',
    address: '742 Evergreen Terrace',
    city: 'Springfield',
    state: 'Florida',
    zip: '33333'
  },
  {
    name: 'Mr. Burns',
    address: '1000 Mammon Lane',
    city: 'Parkland',
    state: 'Florida',
    zip: '33076'
  },
  {
    name: 'Moe Szyslak',
    address: '57 Walnut St.',
    city: 'Tamarac',
    state: 'Florida',
    zip: '33068'
  },
  {
    name: 'W. Seymour Skinner',
    address: '330 Pikeland Ave.',
    city: 'Pompano',
    state: 'Florida',
    zip: '33067'
  },
  {
    name: 'Waylon Joseph Smithers Jr.',
    address: '333 Pikeland Ave.',
    city: '	Wilton Manors',
    state: 'Florida',
    zip: '33305'
  }
];

let server = new ApolloServer({ typeDefs, resolvers });
server.listen({ host: '127.0.0.1', port: 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
