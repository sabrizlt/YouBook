import React, { useState } from 'react';

const AddComment = ({bookId}) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: bookId
  });

  

  return (
    <div>
    </div>
  );
};

export default AddComment;
