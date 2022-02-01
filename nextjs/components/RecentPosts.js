import React from 'react';
import PostCard from './PostCard';
import Grid from '@mui/material/Grid';

function RecentPosts({data}) {
    return (
        <div>
            <Grid container spacing={4}>
                {data.map((data,index)=>{
                    return <Grid item key={index} xs={12} sm={6} md={4}><PostCard key={index} title={data.title} time={data.alDateTime} description={data.description} image={data.imageUrl}  slug={data.slug}/></Grid>
                })}
            </Grid>
            
        </div>
    );
};



export default RecentPosts;