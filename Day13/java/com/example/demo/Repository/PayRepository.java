package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import com.example.demo.Entity.PayEntity;

@Repository
public interface PayRepository extends JpaRepository<PayEntity, String> 
{
	@Query(value="SELECT * FROM pay WHERE firstname=:firstname and lastname=:lastname",nativeQuery=true)
    public List<PayEntity> getAll(String firstname,String lastname);

	public void deleteByFirstname(String firstname);
}