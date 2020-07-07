import React, { useState, useEffect } from 'react';
import CommentsBlock from 'simple-react-comments';

const Comments = ({ contacts }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (contacts) {
      let comments = contacts.map(contact => {
        return {
          fullName: contact.name,
          createdAt: new Date(),
          text: `Hi, I'm from ${contact.city}, ${contact.state}`
        };
      });

      setComments(comments);
    }
  }, []);

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

export default Comments;
