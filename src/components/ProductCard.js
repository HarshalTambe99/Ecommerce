import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  h3 {
    font-size: 1.2em;
  }

  p {
    font-size: 1em;
    color: #333;
  }
`;
