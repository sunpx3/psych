package com.zg.core.controller;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/console")
public class MainController {

	@RequestMapping("/login")
	public ModelAndView login(@ModelAttribute("modelMap") ModelMap modelMap) {
		ModelMap map = new ModelMap();
		map.put("msg", modelMap.get("msg"));
		return new ModelAndView("admin/login",map);
	}
	
	@RequestMapping("/index")
	@RequiresAuthentication
	public String index(@ModelAttribute("modelMap") ModelMap modelMap) {
		return "admin/index";
	}
	
	@RequestMapping("/main")
	public String main(){
		return "admin/main";
	}
}
