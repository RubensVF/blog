package com.rubstechblog.blog.repository;

import com.rubstechblog.blog.models.PostModel;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends CrudRepository<PostModel,Long> {    
    public abstract PostModel findBySlug(String slug);
}
