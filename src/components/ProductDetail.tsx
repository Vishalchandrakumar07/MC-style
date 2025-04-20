import { useParams } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material';
import Slider from 'react-slick';
import { products } from '../data/productsData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" color="error">
          Product not found
        </Typography>
      </Box>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    swipe: true,
  };

  return (
    <Box
      sx={{
        mt: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        maxWidth: '1200px',
        maxHeight: '1800px',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
       

        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: '450px', md: '400px' },
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Slider {...sliderSettings}>
            {product.images.map((imgSrc, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  px: { xs: 0, sm: 2 },
                  py: { xs: 1, sm: 2 },
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src={imgSrc}
                  alt={`${product.title} ${index + 1}`}
                  sx={{
                    width: '100%',
                    maxHeight: { xs: 280, sm: 400, md: 450 },
                    objectFit: 'contain',
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Product Info */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: '100%', md: '50%' },
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{ fontSize: { xs: '1.4rem', sm: '1.7rem' } }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="h6"
          color="primary"
          fontWeight={700}
          sx={{ fontSize: { xs: '1.3rem', sm: '1.5rem' }, mb: 2 }}
        >
          ₹{product.price}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', sm: '1.05rem' }, lineHeight: 1.7 }}
        >
          {product.description}
        </Typography>

         {/* Stock Status Sticker */}
         <Box
  sx={{
    mt: 3,
    display: 'inline-block',
    backgroundColor: product.inStock ? 'success.main' : 'error.main',
    color: '#fff',
    px: 2,
    py: 0.5,
    fontSize: '0.8rem',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'uppercase',
  }}
>
  {product.inStock ? 'In Stock' : 'Out of Stock'}
</Box>

      </Box>
    </Box>
  );
};

export default ProductDetail;
