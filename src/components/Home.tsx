import { Box, Typography, Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ActionAreaCard from "./ActionAreaCard";

export const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // ✅ This was missing

  const products = [
    { id: "1", title: "Party Wear Full Sleeve Shirt", description: "premium imported satin cotton fabric", image: "/1.jpeg", price: 399 },
    { id: "2", title: "Party Wear Full Sleeve Shirt", description: "premium imported satin cotton fabric", image: "/2.jpeg", price: 399 },
    { id: "3", title: "Party Wear Full Sleeve Shirt", description: "premium imported satin cotton fabric", image: "/3.jpeg", price: 399 },
    { id: "4", title: "Party Wear Full Sleeve Shirt", description: "premium imported satin cotton fabric", image: "/4.jpeg", price: 399 },
  ];

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: "100vh", paddingBottom: 4 }}>
      {/* Hero Section */}
      <Box
        id="home-section"
        sx={{
          height: { xs: "auto", md: "90vh" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          padding: { xs: 2, sm: 4 },
          borderRadius: "12px",
          margin: "auto",
          width: { xs: "95%", md: "90%", lg: "80%" },
        }}
      >
        {/* Logo Image */}
        <Box
          component="img"
          src="logo2.png"
          alt="Logo"
          sx={{
            width: { xs: "90%", sm: "80%", md: "60%" },
            maxWidth: "500px",
            borderRadius: "12px",
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.02)" },
          }}
        />

        {/* Text Section */}
        <Box sx={{ textAlign: { xs: "center", md: "center" }, paddingLeft: { md: 4 } }}>
          <Typography
            sx={{
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              fontSize: { xs: "1.2rem", sm: "1.7rem" },
              color: theme.palette.secondary.main, // Gold accent
            }}
            gutterBottom
          >
            HELLO THERE!
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontSize: { xs: "2rem", sm: "2rem", md: "4rem" },
              color: theme.palette.text.primary, // Consistent dark text
            }}
            component="h1"
          >
            Step into style, discover your next favorite look...
          </Typography>
        </Box>
      </Box>

      {/* Cards Section */}
      <Box id="cards-section" sx={{ marginTop: 4 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center", paddingX: 2 }}>
          {products.map((product) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
              <ActionAreaCard
                {...product}
                onClick={() => handleCardClick(product.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
