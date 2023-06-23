import {
  AppBar,
  Box,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <CssBaseline />
        <Toolbar>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"100%"}
          >
            <Typography variant="h6">
              <Link
                component={RouterLink}
                to={"/"}
                sx={{ color: "white" }}
                underline="none"
              >
                RN Blog
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                component={RouterLink}
                to={"/fav"}
                sx={{ color: "white" }}
                underline="none"
              >
                Favorite
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
