import React from 'react';

const Wishlist = ({selectedItem}) => {
    return (
        <div>
            <h3>Wishlist</h3>
            <p>Cards: {selectedItem.id}</p>
        </div>
    );
};

export default Wishlist;