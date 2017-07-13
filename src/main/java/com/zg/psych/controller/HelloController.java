package com.zg.psych.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.zg.psych.entity.CmsArticleEntity;
import com.zg.psych.entity.CountryEntity;
import com.zg.psych.repository.CountryRepository;
import com.zg.psych.services.CmsArticleService;
import com.zg.psych.services.CountryService;

@Controller
public class HelloController {
	
	@Autowired
	private CountryService countryService;
	@Autowired
	private CountryRepository countryRepository;
	@Autowired
	private CmsArticleService cmsArticleService;
	
	private Logger logger = Logger.getLogger(HelloController.class);

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
    	logger.debug(countryList.size());
    	return "home";
    }
    
    @RequestMapping("/article")
    public String article(ModelMap map){
    	
    	//List<CmsArticleEntity> cmsArticleList = countryService.findAllCmsArticleList();
    	List<CmsArticleEntity> cmsArticleList = cmsArticleService.findAll();
    	map.put("cmsArticleList", cmsArticleList);
    	return "article";
    }

}