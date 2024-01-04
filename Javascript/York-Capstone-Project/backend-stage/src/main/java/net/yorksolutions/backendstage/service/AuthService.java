package net.yorksolutions.backendstage.service;

import net.yorksolutions.backendstage.models.UserModel;
import net.yorksolutions.backendstage.models.repo.StageThreadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@Service
public class AuthService {
    @Value("${net.yorksolutions.backendstage.base_url}")
    private String BASE_URL;
    private final RestTemplate restTemplate;

    @Autowired
    public AuthService() {
        this.restTemplate = new RestTemplate();
    }

    public UserModel getUserInfo(UUID token) {
        ResponseEntity<UserModel> response = this.restTemplate.getForEntity(BASE_URL + "/userInfo/" + token, UserModel.class);
        return response.getBody();
    }

    public Boolean checkAuth(UUID token) {
        try {
            ResponseEntity<Void> response = this.restTemplate.getForEntity(BASE_URL + "/checkAuth/" + token, Void.class);
            return true;
        } catch (RestClientException event) {
            return false;
        }
    }
}
