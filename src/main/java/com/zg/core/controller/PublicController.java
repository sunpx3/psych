package com.zg.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mysql.jdbc.StringUtils;
import com.zg.core.conf.UserAuthenticationToken;

/**
 * 系统访问入口
 * 
 * @author sunpx
 *
 */
@Controller
public class PublicController {

	@RequestMapping("login")
	public String index(ModelMap map) {
		return "admin/login";
	}
	
	public ModelAndView checkUser(@Param("username") String username,
			@Param("password") String password){
		
		if(!StringUtils.isNullOrEmpty(username) && !StringUtils.isNullOrEmpty(password)){
			UserAuthenticationToken token = new UserAuthenticationToken(username, password, true);
		}
		
		return new ModelAndView("admin/index");
	}
	
	
	@RequestMapping("logout")
	public ModelAndView toLogout(HttpServletRequest request, HttpServletResponse response){
		
		return new ModelAndView("admin/login");
	}

}
