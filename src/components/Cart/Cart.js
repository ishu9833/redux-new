import React from 'react';
import { removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h1>This is Cart</h1>
            <ul>
                {
                    cart.map(id => <li>{id} <button
                    onClick={()=> removeFromCart(id)}> X</button> </li> )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state =>{
    return{
        cart: state.cart
    }
}


const mapDespatchToProps = {
    removeFromCart =removeFromCart
}
export default connect(mapStateToProps, mapDespatchToProps)(Cart);