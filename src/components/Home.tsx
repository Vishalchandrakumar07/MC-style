import { Box, Typography, Grid, useTheme, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionAreaCard from "./ActionAreaCard";

export const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProducts = [
    { id: "1", title: "Party Wear Full Sleeve Shirt", description: "premium imported satin cotton fabric", image: "/1.jpeg", price: 399, category: "Shirts" },
    { id: "2", title: "Casual T-Shirt", description: "Comfort fit for everyday wear", image: "/2.jpeg", price: 299, category: "T-Shirts" },
    { id: "3", title: "Formal Pant", description: "Slim fit office-ready trousers", image: "/3.jpeg", price: 599, category: "Pants" },
    { id: "4", title: "Stylish Shirt", description: "Bold prints and sharp collar", image: "/4.jpeg", price: 499, category: "Shirts" },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const categories = ["All", "Shirts", "T-Shirts", "Pants"];

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
              color: theme.palette.secondary.main,
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
              color: theme.palette.text.primary,
            }}
            component="h1"
          >
            Step into style, discover your next favorite look...
          </Typography>
        </Box>
      </Box>

      {/* Category Buttons */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: 4, flexWrap: 'wrap' }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(cat)}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "8px",
            }}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Cards Section */}
      <Box id="cards-section" sx={{ marginTop: 4 }}>
        <Grid container spacing={2} sx={{ justifyContent: "center", paddingX: 2 }}>
          {filteredProducts.map((product) => (
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
