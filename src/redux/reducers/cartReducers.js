const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState ={
    cart: [],
    products:[
        {name:'Lenovo ', id:1 },
        {name:'Asus ', id:2 },
        {name:'MacBook ', id:3 },
        {name:'Toshiba ', id:4 },
        {name:'HP ', id:5 },
        {name:'Dell ', id:6 }
    ]
}

const cartReducers = (state= initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART:
                const newId= action.id;
                const newCart = [...state.cart, newId];
                return{...state, cart: newCart};
            
        case REMOVE_FROM_CART:
            const id = action.id ;
            const remainingCart= state.cart.filter(item => item !== id);
            return{...state, cart: remainingCart}        
        default:
            return state;
    }
}
export default cartReducers;
