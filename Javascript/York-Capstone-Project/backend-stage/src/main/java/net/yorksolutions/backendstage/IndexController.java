package net.yorksolutions.backendstage;

import net.yorksolutions.backendstage.models.StageThread;
import net.yorksolutions.backendstage.service.AuthService;
import net.yorksolutions.backendstage.service.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/")
public class IndexController {

    private final StageService stageService;
    private final AuthService authService;

    @Autowired
    public IndexController(@NonNull StageService stageService, @NonNull AuthService authService) {
        this.stageService = stageService;
        this.authService = authService;
    }

    @GetMapping("/createStage")
    public void createStage(
            @RequestParam UUID token,
            @RequestParam String title,
            @RequestParam String description) {
        if (!this.authService.checkAuth(token))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        UUID loggedUser = this.authService.getUserInfo(token).id;
            this.stageService.create(loggedUser, title, description);
        }


    @GetMapping("/stageList")
    public Iterable<StageThread> stageThreads() {
        return this.stageService.getList();
    }

    @PostMapping("/editStage")
    public void editStage(@RequestParam UUID token, @RequestBody StageThread thread) {
        if (!this.authService.checkAuth(token))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        this.stageService.edit(thread);
    }

    @DeleteMapping("/deleteStage")
    public void deleteStage(@RequestParam UUID token, @RequestParam Long id) {
        if (!this.authService.checkAuth(token))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        this.stageService.delete(id);
    }
}

