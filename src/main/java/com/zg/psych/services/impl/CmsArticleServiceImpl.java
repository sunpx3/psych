package com.zg.psych.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.mapper.CmsArticleMapper;
import com.zg.psych.services.CmsArticleService;

@Service
public class CmsArticleServiceImpl implements CmsArticleService {

	@Autowired
	private CmsArticleMapper cmsArticleMapper;
	
	@Override
	public List<CmsArticleEntity> findAll() {
		return cmsArticleMapper.findAll();
	}
}
