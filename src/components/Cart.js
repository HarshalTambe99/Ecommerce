import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import styled from 'styled-components';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <CartContainer>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    max-width: 100px;
    margin-right: 10px;
  }

  div {
    h3 {
      margin: 0;
    }

    button {
      background-color: #f00;
      color: white;
      border: none;
      padding: 5px;
      cursor: pointer;
    }
  }
`;

