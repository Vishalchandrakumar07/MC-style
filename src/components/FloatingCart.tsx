// components/FloatingCart.tsx
import { Fab, Badge, Zoom } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const FloatingCart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <Zoom in={true}>
      <Fab
  color="primary"
  aria-label="cart"
  onClick={() => navigate('/cart')}
  sx={{
    position: 'fixed',
    bottom: { xs: 82, sm: 90 }, // ⬆ raised from 16/24 to 72/80
    right: { xs: 16, sm: 24 },
    zIndex: 1000,
  }}
>
  <Badge badgeContent={totalCount} color="error">
    <ShoppingCartIcon />
  </Badge>
</Fab>
    </Zoom>
  );
};

export default FloatingCart;
