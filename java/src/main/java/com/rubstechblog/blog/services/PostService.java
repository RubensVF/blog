package com.rubstechblog.blog.services;

import java.util.ArrayList;

import com.rubstechblog.blog.models.PostModel;
import com.rubstechblog.blog.repository.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    
    @Autowired
    PostRepository postRepository;

    public ArrayList<PostModel> getPosts (){
        return (ArrayList<PostModel>)postRepository.findAll();
    }

    public PostModel savePost(PostModel post){
        return (PostModel) postRepository.save(post);
    }

    public Boolean deletePost(Long id){
        try{
            postRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    public PostModel getBySlug(String slug){
        return (PostModel) postRepository.findBySlug(slug);
    }

}
