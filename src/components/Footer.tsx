import {
  Box,
  Typography,
  Grid,
  Link,
  IconButton,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import { Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        mt: 8,
        borderTop: '1px solid #333',
      }}
    >
      <Grid container spacing={4}>
        {/* Brand Info */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            MiddleClass
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your go-to destination for trendy and affordable fashion.
          </Typography>
        </Grid>

        {/* Address */}
        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Address
          </Typography>
          <Typography variant="body2">government School, 625/H </Typography>
          <Typography variant="body2">srn school, opposite thiruthangal,</Typography>
          <Typography variant="body2">Thiruthangal, Tamil Nadu 626130</Typography>
        </Grid>
        
        {/* Location (Map or Office Info) */}
        <Grid item xs={6} sm={4} md={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Location
          </Typography>
          <Link
            href="https://www.google.com/maps/place/Middleclass+men's+wear/@9.4818959,77.8124611,17z/data=!3m1!4b1!4m6!3m5!1s0x3b06cf64e477f479:0x489188461bae16bb!8m2!3d9.4818959!4d77.8124611!16s%2Fg%2F11s85mtvc6?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
            display="block"
          >
            Find us on Google Maps
          </Link>
          <Typography variant="body2" mt={1}>
            Mon - Fri: 9am – 6pm
          </Typography>
          <Typography variant="body2">Sat - Sun: Closed</Typography>
        </Grid>

        {/* Social Icons */}
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://www.instagram.com/middle_class_mens_wear_/" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <WhatsApp />
            </IconButton>
          </Box>
        </Grid>

        {/* Subscription Box */}
        <Grid item xs={12} md={3}>
          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Any Thought
          </Typography>
          <Stack spacing={1} mt={1}>
            <TextField
              size="small"
              placeholder="Your email"
              variant="outlined"
              fullWidth
            />
            <TextField
              size="small"
              placeholder="Your message (optional)"
              variant="outlined"
              multiline
              rows={3}
              fullWidth
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box textAlign="center" mt={6}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} TrendThreads. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
