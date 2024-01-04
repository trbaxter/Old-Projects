package net.yorksolutions.backendstage.service;

import net.yorksolutions.backendstage.models.PostDTO;
import net.yorksolutions.backendstage.models.StagePost;
import net.yorksolutions.backendstage.models.StageThread;
import net.yorksolutions.backendstage.models.repo.StagePostRepo;
import net.yorksolutions.backendstage.models.repo.StageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {
    StageThreadRepo stageThreadRepo;
    StagePostRepo stagePostRepo;

    @Autowired
    public PostService(@NonNull StageThreadRepo stageThreadRepo, @NonNull StagePostRepo stagePostRepo) {
        this.stagePostRepo = stagePostRepo;
        this.stageThreadRepo = stageThreadRepo;
    }

    public void add(UUID creator, Long threadID, PostDTO postDTO) {
        Optional<StageThread> maybeStage = this.stageThreadRepo.findById(threadID);
        if(maybeStage.isEmpty())
            throw new ResponseStatusException(HttpStatus.GONE);
        StageThread thread = maybeStage.get();
        List<StagePost> orig = thread.getStagePostList();
        ArrayList<StagePost> newList = new ArrayList(orig);
        StagePost newPost = new StagePost(creator, postDTO.body);
        newList.add(this.stagePostRepo.save(newPost));
        thread.setStagePostList(newList);
        stageThreadRepo.save(thread);
    }
}
