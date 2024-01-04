package net.yorksolutions.backendstage.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class StageThread {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    Long id;
    @JsonProperty
    UUID creator;
    @JsonProperty
    String title;
    @JsonProperty
    String description;


    @OneToMany(cascade = CascadeType.REMOVE)
    @JsonProperty
    List<StagePost> stagePostList;

    public StageThread() {}
    public StageThread(UUID creator, String title, String description) {
        this.creator = creator;
        this.title = title;
        this.description = description;
    }

    public List<StagePost> getStagePostList() {
        return stagePostList;
    }

    public void setStagePostList(List<StagePost> stagePostList) {
        this.stagePostList = stagePostList;
    }
}
