import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Solutions = () => {

    const items = ["Custom Software Development", "AI & Machine Learning", "Cloud Integration", "IoT Solutions"];

    return(
        <>
      {
        items.map((item) => {
 return (

    <Box   
     
    gap={3} 
    sx={{display:"flex", justifyContent: "center", flexDirection: "row", padding: 3 }}>

    
        <Card sx={{ display: "flex", flexDirection: "row", maxWidth: 275, border: "solid black", borderRadius: "8px",   transition: "box-shadow 0.3s ease", backgroundColor: "#FFFFFF", boxShadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
        <CardContent>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {item}
          </Typography>
          <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> 
      </Box>
      )
         })}
      </>
    )
}

export default Solutions;