import { CartActionTypes } from "../cart/cart.type";

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            case CartActionTypes.ADD_ITEMS:
                return{
                    ...state,
                    cartItems:[...state.cartItems,action.payload]
                }
        default:
            return state
    }
}

export default cartReducer;