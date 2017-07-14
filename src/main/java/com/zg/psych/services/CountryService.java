package com.zg.psych.services;

import java.util.List;

import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.entity.CountryEntity;

public interface CountryService {
	public List<CountryEntity> findAll();
}
