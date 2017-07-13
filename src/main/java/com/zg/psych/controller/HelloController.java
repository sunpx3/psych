package com.zg.psych.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.entity.CountryEntity;
import com.zg.psych.mapper.CmsArticleMapper;
import com.zg.psych.repository.CountryRepository;
import com.zg.psych.services.CountryService;

@Controller
public class HelloController {
	
	@Autowired
	private CountryService countryService;
	@Autowired
	private CountryRepository countryRepository;
	@Autowired
	private CmsArticleMapper cmsArticleMapper;

    @RequestMapping("/")
    public String index(ModelMap map) {
    	map.put("host", "124.0.0.1");
        return "index";
    }
    
    @RequestMapping("/home")
    public String home(ModelMap map){
    	
    	List<CountryEntity> countryList = countryService.findAll();
    	//List<CountryEntity> countryList = countryRepository.findAll(); 
    	map.put("countryList", countryList);
    	
    	return "home";
    }
    
    @RequestMapping("/article")
    public String article(ModelMap map){
    	
    	//List<CmsArticleEntity> cmsArticleList = countryService.findAllCmsArticleList();
    	List<CmsArticleEntity> cmsArticleList = cmsArticleMapper.findAll();
    	map.put("cmsArticleList", cmsArticleList);
    	
    	return "article";
    }

}