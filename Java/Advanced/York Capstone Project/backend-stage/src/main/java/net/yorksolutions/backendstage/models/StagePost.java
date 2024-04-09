package net.yorksolutions.backendstage.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class StagePost {
    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    @JsonProperty
    Long id;

    @JsonProperty
    UUID creator;

    @JsonProperty
    String body;

    public StagePost(UUID creator, String body) {
        this.creator = creator;
        this.body = body;
    }

    public StagePost() {}
}
