import React from "react";

const Header = ({ searchTerm }) => {
  return (
    <div>
      <h1 className="heading">{searchTerm} anime list</h1>
    </div>
  );
};

export default Header;
