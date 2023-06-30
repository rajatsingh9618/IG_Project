import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#ee312f"  }}>
          <Toolbar>
            <Typography variant="h4" component="div" sx={{
              flexGrow: 1, fontWeight: 'bold',
              display: { xs: "none", sm: "block" },

            }}>
              Intelligraph
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#9b0e0d" : "" };
              }}
              sx={{ color: "white", textTransform: "none", fontWeight: 'bold' }}
            >
              Home
            </Button>

            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#9b0e0d" : "" };
              }}
              sx={{ color: "white", textTransform: "none", fontWeight: 'bold' }}
            >
              Login / Registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
