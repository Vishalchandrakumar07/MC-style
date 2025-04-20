import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Button,
} from '@mui/material';
import { useCart } from '../components/CartContext'; // update this path if needed

interface ActionAreaCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  altText?: string;
  price: number;
  onClick?: () => void;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  id,
  title,
  description,
  image,
  altText = 'Product Image',
  price,
  onClick,
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent card click
    addToCart({
      id,
      name: title,
      price,
      image,
    });
  };

  return (
    <Card
      sx={{
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={altText}
          sx={{
            objectFit: 'cover',
            transition: '0.4s ease-in-out',
            '&:hover': {
              opacity: 0.8,
              transform: 'scale(1.1)',
            },
          }}
        />
        
        {/* Price Tag */}
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '8px',
            fontWeight: 600,
          }}
        >
          ₹{price}
        </Typography>

        <CardContent sx={{ bgcolor: '#ffffff', padding: 2 }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.4rem' },
              fontWeight: 'bold',
              color: '#333',
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: '#555',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              lineHeight: 1.4,
              height: '45px',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>

          <Button
            variant="contained"
            sx={{
              marginTop: 1,
              backgroundColor: '#007bff',
              '&:hover': {
                backgroundColor: '#0056b3',
              },
              transition: 'background-color 0.3s',
              padding: '6px 12px',
              fontSize: '0.9rem',
              fontWeight: '600',
              textTransform: 'none',
              width: 'auto', // Keep button width compact
              alignSelf: 'flex-start', // Align to the left
            }}
            onClick={handleAddToCart}
          >
            Add To Cart
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
