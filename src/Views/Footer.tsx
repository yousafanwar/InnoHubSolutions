import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {LinkedIn, Twitter, Facebook} from "@mui/icons-material"


const Footer = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      gap={5}
      sx={{
        width: "100%",
        backgroundColor: "#333333",
        padding: "20px",
        color: "white",
        textAlign: { xs: 'center', sm: 'left' }
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, marginBottom: { xs: "15px", sm: "0" } }}
      >
        <Box sx={{ maxWidth: "150px" }}>
          <img
            srcSet="https://via.placeholder.com/150/92c952"
            src="https://via.placeholder.com/150/92c952"
            alt="accusamus beatae ad facilis cum similique qui sunt"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        direction="column"

      >
        <Typography variant="h6">Quick links</Typography>
        <Typography onClick={() => { navigate("/") }} sx={{
          textAlign: {
            xs: "center", sm: "left", '&:hover': {
              cursor: "pointer",
              color: "#CCCCCC"
            }
          }
        }} variant="body1">Home</Typography>
        <Typography onClick={() => { navigate("/solutions") }} sx={{
          textAlign: {
            xs: "center", sm: "left", '&:hover': {
              cursor: "pointer",
              color: "#CCCCCC"
            }
          }
        }} variant="body1">Solutions</Typography>
        <Typography onClick={() => { navigate("/insights") }} sx={{
          textAlign: {
            xs: "center", sm: "left", '&:hover': {
              cursor: "pointer",
              color: "#CCCCCC"
            }
          }
        }} variant="body1">Insights</Typography>
        <Typography onClick={() => { navigate("/contact") }} sx={{
          textAlign: {
            xs: "center", sm: "left", '&:hover': {
              cursor: "pointer",
              color: "#CCCCCC"
            }
          }
        }} variant="body1">Contact</Typography>
      </Grid>

      <Grid>
      <LinkedIn />
      <Twitter />
      <Facebook/>
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        direction="column"
        sx={{ textAlign: { xs: "center", sm: "left" } }}
      >
        <Typography variant="body1">Address: 1234 Elm Street, Springfield, IL 62704, USA</Typography>
        <Typography variant="body1">Phone: (555) 123-4567</Typography>
        <Typography variant="body1">Email: example@email.com</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
