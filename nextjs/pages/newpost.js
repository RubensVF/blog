import React, { useState } from 'react';
import Main from '../layouts/Main';
import Container from '@mui/material/Container'
import { TextField, Button } from '@mui/material';

const url = 'http://localhost:8080/posts';

export default function Newpost() {
    const [post, setPost] = useState({
        title: "",
        description: "",
        imageUrl: "",
        data: "",
        slug: ""
    });

    const sendData = () => {
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(post), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

    return (
        <Main>
            <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', paddingTop: 100 }}>
                <TextField
                    style={{ marginTop: 15 }}
                    id="1"
                    label="Title"
                    value={post.value}
                    onChange={(e) => {
                        const
                            postAux = post;
                        postAux.title = e.target.value;
                        setPost(postAux);
                    }}
                />
                <TextField
                    style={{ marginTop: 15 }}
                    id="2"
                    label="Description"
                    value={post.description}
                    onChange={(e) => {
                        console.log(e.target.value)
                        const postAux = { ...post };
                        postAux.description = e.target.value;
                        setPost(postAux);
                    }}
                />
                <TextField
                    style={{ marginTop: 15 }}
                    id="3"
                    label="ImageUrl"
                    value={post.imageUrl}
                    onChange={(e) => {
                        const postAux = { ...post };
                        postAux.imageUrl = e.target.value;
                        setPost(postAux);
                    }}
                />
                <TextField
                    style={{ marginTop: 15 }}
                    id="4"
                    label="Data"
                    value={post.data}
                    onChange={(e) => {
                        const postAux = { ...post };
                        postAux.data = e.target.value;
                        setPost(postAux);
                    }}
                />
                <TextField
                    style={{ marginTop: 15 }}
                    id="5"
                    label="Slug"
                    value={post.slug}
                    onChange={(e) => {
                        const postAux = { ...post };
                        postAux.slug = e.target.value;
                        setPost(postAux);
                    }}
                />
                <Button onClick={()=>{sendData()}}>
                    Enviar
                </Button>
            </Container>
        </Main>
    );
};
