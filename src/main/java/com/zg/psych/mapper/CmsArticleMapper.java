package com.zg.psych.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zg.psych.entity.CmsArticleEntity;

@Mapper
public interface CmsArticleMapper {

	@Select(value="SELECT * FROM cms_article where 1=1")
	public List<CmsArticleEntity> findAll();
}
