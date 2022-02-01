package com.rubstechblog.blog.controller;

import java.util.ArrayList;

import com.rubstechblog.blog.models.PostModel;
import com.rubstechblog.blog.services.PostService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "*")
public class PostController {
    
    @Autowired
    PostService postService;

    @GetMapping()
    public ArrayList<PostModel> getPosts(){
        return (ArrayList<PostModel>) postService.getPosts();
    }

    @PostMapping()
    public PostModel savePost(@RequestBody PostModel post){
        return (PostModel) postService.savePost(post);
    }
    @DeleteMapping(path = "/{id}")
    public String deletePost(@PathVariable("id") Long id){
        boolean ok = postService.deletePost(id);
        if (ok){
            return "Se eliminó el post con id " + id;
        }else{
            return "No pudo eliminar el post con id" + id;
        }
    }

    @GetMapping(path = "/{slug}")
    public PostModel getBySlug(@PathVariable("slug") String slug){
        return (PostModel) postService.getBySlug(slug);
    }
}
