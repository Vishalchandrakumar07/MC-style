// components/CartPage.tsx
// import React from 'react';
import { useCart } from '../components/CartContext'; // update path if needed
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from '@mui/material';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Box p={4}>
        <Typography variant="h5">Your cart is empty 😕</Typography>
      </Box>
    );
  }

  return (
    <Box p={4} mt={6}>
      <Typography variant="h4" mb={2}>
        Your Cart 🛒
      </Typography>

      {cartItems.map((item) => (
        <Card
          key={item.id}
          sx={{ display: 'flex', mb: 2, alignItems: 'center' }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{ width: 100, height: 100, objectFit: 'cover' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">Price: {item.price}</Typography>
            <Typography variant="body2">
              Quantity: {item.quantity || 1}
            </Typography>
          </CardContent>
          <Button color="error" onClick={() => removeFromCart(item.id)}>
            Remove
          </Button>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* <Typography variant="h6" mb={2}>
        Total: ₹{total}
      </Typography> */}

      <Button variant="contained" color="error" onClick={clearCart}>
        Clear Cart
      </Button>
    </Box>
  );
};

export default CartPage;
