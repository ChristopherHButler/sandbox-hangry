import { useReducer } from 'react';
import CartContext from './cart-context';


const DEFAULT_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const updatedTotalAmount = state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case 'REMOVE_ITEM':
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload);
      const existingItem = state.items[existingItemIndex];

      const newTotalAmount = state.totalAmount - existingItem.price;

      let newItems;

      if (existingItem.amount === 1) {
        newItems = state.items.filter(item => item.id !== action.payload);
      } else {
        const newItem = { ...existingItem, amount: existingItem.amount - 1 };
        newItems = [...state.items];
        newItems[existingItemIndex] = newItem;
      }

      return {
        ...state,
        items: newItems,
        totalAmount: newTotalAmount,
      };
    default:
      return DEFAULT_STATE;
  }
};



const CartProvider = ({ children }) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, DEFAULT_STATE);

  const onAddItem = (item) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      payload: item,
    });
  };

  const onRemoveitem = (id) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      payload: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddItem,
    removeItem: onRemoveitem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;