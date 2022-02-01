import { useRouter } from 'next/dist/client/router';
import React from 'react';
import PostCard from '../components/PostCard';
import Grid from '@mui/material/Grid';
import Main from '../layouts/Main';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
const posts = [1,2,3,4,5,6];
export default function Search (){
    const router = useRouter()
    const {q} = router.query
    return (
        <div>
            <Main>
                <Container maxWidth="md">
                <Box component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xxs:'column',
                            xs:'column',
                            sm:'column',
                            md:'row',
                            lg:'row'
                        },
                        }}
                    >
                        <Typography variant="h5" align="left" gutterBottom sx={{padding: 2 }}>
                        Results
                        </Typography>
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Thecnologies}
                        sx={{ width: 300,marginLeft:2 }}
                        renderInput={(params) => <TextField {...params} label="Topic" />}
                        />
                        <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={Thecnologies}
                        sx={{ width: 300 ,marginLeft:2 }}
                        renderInput={(params) => <TextField {...params} label="Date" />}
                        />
                    </Box>
                     <Grid container spacing={4}>
                        {posts.map((card)=>(<Grid item key={card} xs={12} sm={6} md={4}>
                        <PostCard></PostCard>
                        </Grid>))}
                    </Grid>
                </Container>
            </Main>
        </div>
    );
};

const Thecnologies = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
  ];