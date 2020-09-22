import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    const {name} = product;
    return (
        <div style={{border: '1px solid lightGray', width: '50%', padding:'10px', margin:'5px'}}>
            <h3>Laptop Brand</h3>
            <p>: {name}</p>
            <button onClick={() => addToCart(product.id)}>Add to cart</button>
        </div>
    );
};

export default Product;