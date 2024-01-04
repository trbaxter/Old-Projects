

package net.yorksolutions.backendstage;

import net.yorksolutions.backendstage.models.PostDTO;
import net.yorksolutions.backendstage.service.AuthService;
import net.yorksolutions.backendstage.service.PostService;
import net.yorksolutions.backendstage.service.StageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@RestController
@RequestMapping("/post")
public class StagePostController {

    private final AuthService authService;
    private final PostService postService;

    @Autowired
    public StagePostController(
            @NonNull AuthService authService,
            @NonNull PostService postService,
            @NonNull StageService stageService) {
        this.authService = authService;
        this.postService = postService;
        this.stageService = stageService;
    }

    private final StageService stageService;

    @PostMapping
    public void add(
            @RequestParam UUID token,
            @RequestParam Long threadID,
            @RequestBody PostDTO postDTO) {
        if (!authService.checkAuth(token))
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        UUID loggedUser = authService.getUserInfo(token).id;
        this.postService.add(loggedUser, threadID, postDTO);
    }
}
