import React from "react";

const Filter = ({ settext }) => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
