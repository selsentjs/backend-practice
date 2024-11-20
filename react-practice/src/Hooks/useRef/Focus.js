import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef();

  const handleFocus = (e) => {
    e.preventDefault()
    inputRef.current.focus();// focus - should in small letter
  };

  return (
    <div>
      <form>
        <input type="text" name="name" ref={inputRef} />
        <button type="submit" onClick={handleFocus}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Focus;
