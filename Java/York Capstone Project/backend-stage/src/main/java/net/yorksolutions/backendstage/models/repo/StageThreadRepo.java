package net.yorksolutions.backendstage.models.repo;

import net.yorksolutions.backendstage.models.StageThread;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StageThreadRepo extends CrudRepository<StageThread, Long> {
    Boolean existsByTitle(String title);
}
