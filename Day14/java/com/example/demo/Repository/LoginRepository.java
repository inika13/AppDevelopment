package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.LoginEntity;

public interface LoginRepository extends JpaRepository<LoginEntity, String> {
	@Query(value = "SELECT * FROM login WHERE username=:username", nativeQuery = true)
	public List<LoginEntity> getAll(String username);
}