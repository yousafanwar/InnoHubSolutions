import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';


const Solutions = () => {

  // const [fadeIn, setFadeIn] = useState(false);
  // const [fadeOut, setFadeOut] = useState(true);
  const items = ["Custom Software Development", "AI & Machine Learning", "Cloud Integration", "IoT Solutions"];

  const [fadeStates, setFadeStates] = useState(
    items.map(() => ({ fadeIn: false, fadeOut: true }))
  );

  const handleMouseEnter = (index: number) => {
    setFadeStates((prev) =>
      prev.map((state, i) =>
        i === index ? { fadeIn: true, fadeOut: false } : state
      )
    );
  };

  const handleMouseLeave = (index: number) => {
    setFadeStates((prev) =>
      prev.map((state, i) =>
        i === index ? { fadeIn: false, fadeOut: true } : state
      )
    );
  };
  return (
    <>
      <Box

        gap={3}
        sx={{ display: "flex", justifyContent: "center", padding: 3 }}
        
        >
      {items.map((item, index) => {
        const { fadeIn, fadeOut } = fadeStates[index];
            
            return (
              <Card key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '40vh', width:'20vw', flexDirection: "row", maxWidth: 275, borderRadius: "8px", transition: "box-shadow 0.3s ease", backgroundColor: "#FFFFFF", boxShadow: "0 4px 8px rgba(128, 128, 128, 0.4), 0 2px 4px rgba(128, 128, 128, 0.3)", cursor: "pointer" }}
              onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}
              >
                <CardContent sx={{display: "flex", justifyContent: "center", alignItems: "center", height: '40vh', textAlign: "center"}}>
                  { fadeOut &&
                  <Box>
                  <Typography variant="h5" component="div">
                    {item}
                  </Typography>
                  </Box>
                  }
                <Fade in={fadeIn} timeout={1000}>
                <Box>
                {fadeIn && 
                <>
                  <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                <CardActions sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                  <Button variant="contained" size="small" sx={{
                                color: "#4A4A4F", backgroundColor: "inherit", border: '0.5mm solid #4A4A4F', '&:hover': {
                                    backgroundColor: "#4A4A4F", color: "white"
                                }
                            }}>Learn More</Button>
                </CardActions>
                </>
              }
                  </Box>
              </Fade>
                </CardContent>
              </Card>
            )
          })}
      </Box>
    </>
  )
}

export default Solutions;