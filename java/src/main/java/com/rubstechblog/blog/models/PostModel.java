package com.rubstechblog.blog.models;

import javax.persistence.*;

@Entity
public class PostModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String imageUrl;
    @Column(columnDefinition = "TEXT")
    private String data;
    private String slug;
    @Basic
    @Temporal(TemporalType.TIMESTAMP)
    private java.util.Date alDateTime = new java.util.Date();
    
    @PreUpdate
    public void setLastUpdate() {  this.alDateTime = new java.util.Date(); }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public String getData() {
        return data;
    }
    public void setData(String data) {
        this.data = data;
    }
    public String getSlug() {
        return slug;
    }
    public void setSlug(String slug) {
        this.slug = slug;
    }
    public java.util.Date getAlDateTime() {
        return alDateTime;
    }
    public void setAlDateTime(java.util.Date alDateTime) {
        this.alDateTime = alDateTime;
    }

}

