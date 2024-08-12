import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../services/api';
import { addToCart } from '../redux/cartSlice';
import styled from 'styled-components';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetchProductById(id);
      setProduct(response.data);
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <ProductDetailContainer>
      <img src={product.image} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetailPage;

const ProductDetailContainer = styled.div`
  display: flex;
  padding: 20px;

  img {
    max-width: 300px;
    margin-right: 20px;
  }

  div {
    h2 {
      margin: 0;
    }

    button {
      background-color: #333;
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
  }
`;


