package com.zg.psych.services.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.zg.core.datasource.TargetDataSource;
import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.mapper.CmsArticleMapper;
import com.zg.psych.services.CmsArticleService;

@Service
public class CmsArticleServiceImpl implements CmsArticleService {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private CmsArticleMapper mapper;
	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<CmsArticleEntity> findAllCmsArticleList() {
		
		String sql = "SELECT * FROM cms_article WHERE 1=1";
		return jdbcTemplate.query(sql, new RowMapper(){

			@Override
			public Object mapRow(ResultSet rs, int arg1) throws SQLException {
				
				CmsArticleEntity cmsArticle = new CmsArticleEntity();
				
				cmsArticle.setId(rs.getString("id"));
				cmsArticle.setTitle(rs.getString("title"));
				cmsArticle.setSummary(rs.getString("summary"));
				cmsArticle.setCreateName(rs.getString("create_name"));
				
				return cmsArticle;
			}
		});
	}
	
	/**
	 * @TargetDataSource注解不能直接在Mapper接口上使用.
	 */
	public List<CmsArticleEntity> findAllCmsArticleList1(){
		return mapper.findAll();
	}
}
