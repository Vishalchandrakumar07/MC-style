import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { IconButton, Box } from '@mui/material';

const WhatsAppFloatingButton = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 18,
        right: 16,
        zIndex: 1000,
      }}
    >
      <IconButton
        component="a"
        href="https://wa.me/+91 962914281" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#25D366',
          color: '#fff',
          width: 60,
          height: 60,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            backgroundColor: '#1EBE5D',
          },
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 32 }} />
      </IconButton>
    </Box>
  );
};

export default WhatsAppFloatingButton;
