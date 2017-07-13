package com.zg.psych.services;

import java.util.List;

import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.zg.psych.entity.CmsArticleEntity;

public interface CmsArticleService {

	/**
	 * 接口上使用事物注解，若实现类有导常，则rollback
	 * @return
	 */
	@Transactional(isolation = Isolation.DEFAULT, propagation = Propagation.REQUIRED)
	public List<CmsArticleEntity> findAll();
}
