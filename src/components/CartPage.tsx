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
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Box p={{ xs: 2, sm: 4 }} mt={6} textAlign="center">
        <Typography variant="h5">Your cart is empty 😕</Typography>
      </Box>
    );
  }

  return (
    <Box p={{ xs: 2, sm: 4 }} mt={6}>
      <Typography variant="h4" mb={2}>
        Your Cart 🛒
      </Typography>

      {cartItems.map((item) => (
        <Box key={item.id} mb={2}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  width: { xs: '100%', sm: 100 },
                  height: { xs: 200, sm: 100 },
                  objectFit: 'cover',
                }}
              />
              <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                <Typography variant="h6" color="text.primary">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ₹{item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity || 1}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          <Box mt={1} display="flex" justifyContent="flex-end">
            <Button color="error" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 3 }} />

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="error" onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
