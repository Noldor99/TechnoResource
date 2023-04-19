import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, ADD_TO_CART, CALCULATE_TOTAL_QUANTITY, DECREASE_CART } from '../../store/slice/cartSlice';
import FlexBetween from '../styleComponents/FlexBetween';

const ProductCalculator = ({ id, product }: any) => {


  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cart = cartItems.find((cart: any) => cart.id === id);


  const isCartAdded = cartItems.findIndex((cart: any) => {
    return cart.id === id;
  });


  const addToCart = (cart: any) => {
    dispatch(ADD_TO_CART(cart));
    dispatch(CALCULATE_TOTAL_QUANTITY({}));
  };

  const decreaseCart = (cart: any) => {
    dispatch(DECREASE_CART(cart));
    dispatch(CALCULATE_TOTAL_QUANTITY({}));
  };


  return (
    <FlexBetween>
      {isCartAdded < 0 ?
        <Button
          variant='outlined' color="success"
          sx={{ width: { xs: '100%' } }}
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </Button> : (
          <>
            <Button
              variant='outlined' color="success"
              onClick={() => decreaseCart(cart)}
            >
              -
            </Button>
            <Typography fontWeight='bold'>
              {cart.cartQuantity}
            </Typography>
            <Button
              variant='outlined' color="success"
              onClick={() => addToCart(cart)}
            >
              +
            </Button>
          </ >
        )}
    </FlexBetween>
  )
}

export default ProductCalculator