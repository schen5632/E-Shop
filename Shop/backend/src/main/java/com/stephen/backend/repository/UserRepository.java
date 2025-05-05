package com.stephen.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stephen.backend.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Integer>{
	Optional<UserEntity> findByUsername(String username);
	Boolean existsByUsername(String username);

}
