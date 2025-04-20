import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import FloatingCart from './components/FloatingCart';
import { CartProvider } from './components/CartContext'; // 👈 import context
import CartPage from './components/CartPage';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider> {/* 👈 wrap entire app to provide cart context */}
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <WhatsAppFloatingButton />
          <FloatingCart /> {/* ✅ floating cart visible on all pages */}
          <Box id="footer" sx={{ scrollMarginTop: '80px' }}>
  <Footer />
</Box>

        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;
