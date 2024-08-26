package com.dular.demo.repository;

import com.dular.demo.domain.UserProfile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by maiquelknechtel on 13/07/24.
 */
@Repository
public interface UserProfileDao extends CrudRepository<UserProfile, Integer> {
}
