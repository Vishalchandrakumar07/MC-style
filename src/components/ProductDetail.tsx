import { useParams } from 'react-router-dom';
import { Box, Typography, Divider } from '@mui/material';
import { products } from '../data/productsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Box sx={{ p: 4, mt: 6 }}> {/* 👈 Added mt to move it down */}
        <Typography variant="h4" color="error">
    Product not found
  </Typography>
</Box>

    );
  }

  return (
    <Box
      sx={{
        mt: { xs: 4, sm: 6 },
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        maxWidth: '1200px',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 4, md: 6 },
      }}
    >
      {/* Image Section with Swiper */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 300,
          mx: 'auto',
          px: 1,
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop
          style={{ borderRadius: '16px' }}
        >
          {product.images.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: { xs: 250, sm: 350, md: 400 },
                  backgroundColor: '#f9f9f9',
                  borderRadius: 2,
                }}
              >
                <Box
                  component="img"
                  src={imgSrc}
                  alt={`${product.title} ${index + 1}`}
                  sx={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: 2,
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Product Info */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
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
          {product.price}
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
