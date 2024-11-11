import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid2';

interface Posts {
    id: number,
    title: string,
    body: string
}

const Insights = () => {

    const [posts, setPosts] = useState<Posts[] | null>(null);
    const [postId, setPostId] = useState<number | null>(null);
    const [open, setOpen] = useState(false);

    const fetchData = async () => {
        setOpen(true);
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const result = await response.data.slice(0, 3);
            setPosts(result);
            setOpen(false);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        document.title = "Insights";
    }, [])

    const handleReadMore = (event: any, index: number) => {
        posts && posts.forEach(element => {
            if (element.id === index + 1) {
                setPostId(element.id);
            }

        });
        console.log(event.target);
    }


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box>

            <Grid gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: { xs: '60vh', md: '80vh' }, width: "100%", backgroundColor: "#666666" }}>
                <Typography variant='h3'>Get you insights here!</Typography>
                <Button sx={{ color: "white", backgroundColor: "inherit", border:"0.5mm solid white", '&:hover': { color: "black", backgroundColor: "white" } }} onClick={fetchData}>Click here</Button>
            </Grid>



            <Grid gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 3 }}>


                <Backdrop
                    sx={(theme) => ({ color: 'black', zIndex: theme.zIndex.drawer + 1 })}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>

                <Box>
                    {posts && posts.map((post, index) => {
                        return <Card key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", borderRadius: "8px", transition: "box-shadow 0.3s ease", backgroundColor: "#FFFFFF", boxShadow: "0 4px 8px rgba(128, 128, 128, 0.4), 0 2px 4px rgba(128, 128, 128, 0.3)", cursor: "pointer", margin: "10px" }}>
                            <CardContent sx={{ flex: 1, width: "100%" }}>
                                <Grid direction='column' size={{ sm: 6, md: 12, lg: 12 }} sx={{ height: 'auto' }}>
                                    <Typography variant='h5'>Title: {post.title}</Typography>
                                    <Typography variant='body1'>{postId && postId === index + 1 ? post.body : `${post.body.slice(0, 10)}...`}</Typography>
                                </Grid>
                            </CardContent>
                            <CardActions >
                                <Button onClick={() => { handleReadMore(event, index) }} sx={{
                                    color: "#4A4A4F", backgroundColor: "inherit", border: '0.5mm solid #4A4A4F', '&:hover': {
                                        backgroundColor: "#4A4A4F", color: "white"
                                    }
                                }}>Read more</Button>


                            </CardActions>

                        </Card>
                    })

                    }

                </Box>
            </Grid>
        </Box>
    )
}

export default Insights;