package com.zg.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 系统访问入口
 * 
 * @author sunpx
 *
 */
@Controller
public class PublicController {

	@RequestMapping("/")
	public String index(ModelMap map) {
		return "admin/login";
	}

	@RequestMapping("loginForm")
	public ModelAndView toLoginForm(HttpServletRequest request, HttpServletResponse response) {

		return new ModelAndView("admin/index");
	}
	
	
	@RequestMapping("logout")
	public ModelAndView toLogout(HttpServletRequest request, HttpServletResponse response){
		
		return new ModelAndView("admin/login");
	}

}
