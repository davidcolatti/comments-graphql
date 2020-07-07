import React, { useState } from 'react';
import CommentsBlock from 'simple-react-comments';

const commentsData = [
  {
    fullName: 'David',
    createdAt: new Date(),
    text: "Hi, it's David"
  },
  {
    fullName: 'Luis',
    createdAt: new Date(),
    text: "Hi, it's Luis"
  },
  {
    fullName: 'Garrett',
    createdAt: new Date(),
    text: "Hi, it's Garrett"
  }
];

const App = () => {
  const [comments, setComments] = useState(commentsData);

  function onCommentSubmit(text) {
    if (text.length > 0) {
      setComments([
        ...comments,
        {
          fullName: 'Name',
          createdAt: new Date(),
          text
        }
      ]);
      console.log('submit:', text);
    }
  }

  return (
    <div className="app">
      <CommentsBlock
        comments={comments}
        signinUrl={'/signin'}
        isLoggedIn
        reactRouter={false} // set to true if you are using react-router
        onSubmit={text => onCommentSubmit(text)}
      />
    </div>
  );
};

export default App;
