import { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import '../styles/HomePage.css';
import axios from 'axios';

interface Photos {
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
const HomePage = () => {
  const [photoData, setPhotoData] = useState<Photos[] | null>(null);
  const [imgTranslateX, setImgTranslateX] = useState<string>("-35vw");
  const [textTranslateX, settextTranslateX] = useState<string>("35vw");
  const navigate = useNavigate();

  const observedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImgTranslateX("0");
        settextTranslateX("0");
      };
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    if (observedRef.current) {
      observer.observe(observedRef.current as Element);
    }

    return () => observer.disconnect();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const result = response.data.slice(0, 3);
        setPhotoData(result);
      } catch (error) {
        console.error(error)
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <div className="parallax">
        <Grid gap={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ color: "#F7F7F8" }}>Transform Your Ideas into Reality with InnoHub</Typography>
          <Grid gap={2} sx={{ display: "flex", flexDirection: "column", color: "#E1E1E3" }}>
            <Typography variant="h4">Your Partner in Innovation and Growth</Typography>
            <Button variant="contained" onClick={() => { navigate("/solutions") }} sx={{
              backgroundColor: "#4A4A4F", '&:hover': {
                backgroundColor: "#5C5C60",
              }
            }}>Get Started</Button>
          </Grid>
        </Grid>
      </div>

      <Grid container ref={observedRef} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", overflow: "hidden" }}>
        <Grid item xs={12} md={6} sx={{ transform: `translateX(${imgTranslateX})`, transition: "ease 2s", display: "flex", justifyContent: "center", mb: { xs: 2, md: 0 } }}>
          {photoData && <img
            srcSet={photoData[0].url}
            src={photoData[0].url}
            alt={photoData[0].title}
            loading="lazy"
            style={{ width: "100%", maxWidth: "500px", height: "auto" }}
          />}
        </Grid>
        <Grid item xs={12} md={6} sx={{ transform: `translateX(${textTranslateX})`, transition: "ease 2s", padding: '20px', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage;