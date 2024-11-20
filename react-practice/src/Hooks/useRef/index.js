import React, { useRef } from "react";

const UseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const formSubmit = (e) => {
    e.preventDefault();
    // controlled by DOM
    let name = document.getElementById("name").value;
    console.log("name:", name);
    let email = document.getElementById("email").value;
    console.log("email:", email);

    // controlled by ref
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Name:</label>
        <input type="text" name="name" id="name" ref={nameRef} />
        <label>Email:</label>
        <input type="email" name="email" id="email" ref={emailRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
