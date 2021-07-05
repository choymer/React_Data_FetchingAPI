import React from 'react';

const Header = ({searchTerm}) => {
    return (
        <div>
            <h1>{searchTerm} Anime List</h1>
        </div>
    );
};

export default Header;