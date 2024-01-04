package net.yorksolutions.backendstage.service;

import net.yorksolutions.backendstage.models.StageThread;
import net.yorksolutions.backendstage.models.repo.StageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;
import java.util.UUID;

@Service
public class StageService {
    private final StageThreadRepo repo;

    @Autowired
    public StageService(@NonNull StageThreadRepo repo) {
        this.repo = repo;
    }

    public void create(UUID creator, String title, String description) {
        if (repo.existsByTitle(title))
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Error! A thread with the same title already exists!");
        StageThread newstage = new StageThread(creator, title, description);
        repo.save(newstage);
    }

    public Iterable<StageThread> getList() {
        return repo.findAll();
    }

    public void edit(StageThread thread) {
        this.repo.save(thread);
    }

    public void delete(Long id) {
        Optional<StageThread> stage = this.repo.findById(id);
        if (stage.isEmpty())
            throw new ResponseStatusException(HttpStatus.GONE, "Id does not exist!");
        this.repo.delete(stage.get());
    }
}
