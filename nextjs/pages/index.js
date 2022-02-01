import * as React from 'react';
import Main from '../layouts/Main';
import Hero from '../components/Hero'
import Container from '@mui/material/Container'
import RecentPosts from '../components/RecentPosts';
import Instagram from '../components/Instagram';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArticleIcon from '@mui/icons-material/Article';
import Link from 'next/link'

export default function Index({data}) {
 
  return (
    <Main>
      <Hero/>
      <Container maxWidth="md">
        <Typography variant="h5" align="left" gutterBottom sx={{padding: 2 }}>
          Recent Posts
        </Typography>
        <RecentPosts data={data}/>
        <Typography variant="h5" align="left" gutterBottom sx={{padding: 2 }}>
          Instagram Posts
        </Typography>
        <Instagram/>
      </Container>
      {
      //Falta poner buscador  //<FloatingActionButtons/>
      }
    </Main> 
  );
}


function FloatingActionButtons() {
  return (
    <Link href='/search'>
      <Box sx={{ position:'fixed',bottom:40, right:40 ,zIndex:40 }}>
        <Fab variant="extended">
          <ArticleIcon sx={{ mr: 1 }} />
          See All Posts
        </Fab>
      </Box>
    </Link>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/posts');
  const data = await res.json()
  return {
    props: { 
        data
       }
  }
}