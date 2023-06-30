import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid item sx={{ backgroundColor: "gray", p: 5, color: "white" }}>
        <h1>Dashboard Screen</h1>
        <p>
          Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          earum officiis debitis vel tenetur quos animi vero voluptates
          reiciendis, omnis sed in libero temporibus deleniti pariatur expedita
          corporis officia. Odit enim, quasi facere magnam earum officiis ipsa
          aliquid impedit velit quibusdam dolor ex esse ratione explicabo quod,
          culpa temporibus? Dolorem deleniti doloremque maxime quas deserunt. Ex
          aspernatur saepe illo eaque corrupti placeat, aperiam nulla adipisci
          itaque quos necessitatibus iure at minus non delectus ratione quod ad.
          Alias dolore perferendis est expedita iure! Nostrum laborum tempore
          amet commodi voluptas accusamus enim repudiandae, quia odio cumque,
          laboriosam architecto illo! Aliquid, fuga quis.
        </p>
        <Button
          variant="contained"
          size="large"
          onClick={handleLogout}
          sx={{ mt: 8, bgcolor: "#ee312f" }}
        >
          Logout
        </Button>
      </Grid>
    </>
  );
};

export default Dashboard;
