import React, { useState } from 'react';

const File = () => {
  const [message, setMessage] = useState("You didn't click the button");

  // Function to change the message when button is clicked
  const updateMessage = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={updateMessage}>Click Me!</button>
    </div>
  );
};

export default File;
