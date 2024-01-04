package net.yorksolutions.backendstage.models.repo;

import net.yorksolutions.backendstage.models.StagePost;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StagePostRepo extends CrudRepository<StagePost, Long> {
}
