import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
import Pic1 from "../../../images/image4.png";
import Logo from "../../../images/logo.png";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 5, height: 505 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "#9b0e0d",
                    }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "#9b0e0d",
                    }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            <Box textAlign="center">
              <img src={Logo} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
