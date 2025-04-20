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
import { Link } from 'react-router-dom'; // ✅ import Link

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Box p={4}>
      <Typography variant="h5" mt={6}>
        Your cart is empty 😕
      </Typography>
    </Box>
    
    );
  }

  return (
    <Box p={4} mt={6}>
      <Typography variant="h4" mb={2}>
        Your Cart 🛒
      </Typography>

      {cartItems.map((item) => (
        <Box key={item.id} sx={{ mb: 2 }}>
          <Link to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ width: 100, height: 100, objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
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

      <Button variant="contained" color="error" onClick={clearCart}>
        Clear Cart
      </Button>
    </Box>
  );
};

export default CartPage;
