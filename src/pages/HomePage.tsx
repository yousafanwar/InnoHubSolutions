import Typography from '@mui/material/Typography';
import { Button, Grid2 } from '@mui/material';
import { useNavigate  } from "react-router-dom";
import '../styles/HomePage.css';


const HomePage = () => {
    const navigate = useNavigate();

    return(
        <>
        <div className="parallax">
        <Grid2 gap={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column'}}>
        <Typography variant="h3" sx={{color: "#F7F7F8"}}>Transform Your Ideas into Reality with InnoHub</Typography>
        <Grid2 gap={2} sx={{display: "flex", flexDirection: "column", color: "#E1E1E3	"}}>
        <Typography variant="h4">Your Partner in Innovation and Growth</Typography>
        <Button variant="contained" onClick={() => {navigate("/solutions")}} sx={{backgroundColor: "#4A4A4F",'&:hover': {
      backgroundColor: "#5C5C60", 
    }}}>Get Started</Button>
        </Grid2>
        </Grid2>
        </div>
        </>
        )
}

export default HomePage;