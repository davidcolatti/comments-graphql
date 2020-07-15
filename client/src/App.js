import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from './graphql/queries';

// components
import Comments from './components/Comments';
import AddComment from './components/AddComment';

const App = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Comments contacts={data.contacts} />
      <AddComment />
    </div>
  );
};

export default App;
