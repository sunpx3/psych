package com.zg.psych.services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.entity.CountryEntity;

@Service
public class CountryServiceImpl implements CountryService {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	@Qualifier("primaryJdbcTemplate")
	protected JdbcTemplate jdbcTemplate1;

	@SuppressWarnings("unchecked")
	@Override
	public List<CountryEntity> findAll() {
		
		return jdbcTemplate.query("SELECT * FROM COUNTRY WHERE 1=1",new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int paramInt) throws SQLException {
				CountryEntity country  = new CountryEntity();
				country.setCountryCode(rs.getString("countryCode"));
				country.setCountryName(rs.getString("countryName"));
				country.setId(rs.getString("id"));
				return country;
			}
		});
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<CmsArticleEntity> findAllCmsArticleList() {
		
		String sql = "SELECT * FROM cms_article WHERE 1=1";
		return jdbcTemplate1.query(sql, new RowMapper(){

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
}
