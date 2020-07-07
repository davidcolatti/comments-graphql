import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from './graphql/queries';

// components
import Comments from './components/Comments';

const App = () => {
  const { loading, error, data } = useQuery(GET_CONTACTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Comments contacts={data.contacts} />
    </div>
  );
};

export default App;
