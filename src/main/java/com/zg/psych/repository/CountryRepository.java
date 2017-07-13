package com.zg.psych.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.zg.psych.entity.CountryEntity;

public interface CountryRepository extends JpaRepository<CountryEntity, Long> {
	 
	@Query(value="select * FROM country WHERE 1=1",nativeQuery=true)
	List<CountryEntity> findAll();
}
