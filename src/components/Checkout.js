import React from 'react';
import styled from 'styled-components';

const Checkout = () => {
  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <p>This is a mock checkout process.</p>
      <button>Place Order</button>
    </CheckoutContainer>
  );
};

export default Checkout;

const CheckoutContainer = styled.div`
  padding: 20px;

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;
