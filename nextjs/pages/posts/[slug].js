import React from 'react';
import Main from '../../layouts/Main';
import Container from '@mui/material/Container'
import PostElements from '../../components/PostElements';
import Typography from '@mui/material/Typography'
function post({title,description,data,time}) {
    return (
        <Main>
            <Container maxWidth="md">    
                <Typography variant="h3">{title}</Typography>            
                <br/>
                <Typography variant="subtitle1" gutterBottom component="div">{description}</Typography>
                <br/>
                {data.map((data,index)=>{
                  return (<PostElements data = {data} key = {index}/>)
                })}
            </Container>
        </Main>
    );
};

export default post;


export const getStaticPaths = async () => {
        const res = await fetch('http://localhost:8080/posts')
        const posts = await res.json()
        const paths = posts.map(({slug})=>({params:{slug}}))
        return {
            paths,
            fallback: false
        }
   
  }

export const getStaticProps = async ({params}) => {
        const res = await fetch('http://localhost:8080/posts/'+params.slug);
        const post = await res.json();
        const data = await JSON.parse(post.data)
        return {
        props: {
            title:post.title,
           description:post.description,
            data:data.content,
            time:post.alDateTime,
        },
    }
  }
  