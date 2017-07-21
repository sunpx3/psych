package com.zg.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.apache.log4j.spi.LoggerFactory;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

	private Logger logger = Logger.getLogger(PublicController.class);
	
	@RequestMapping("login")
	public String index(ModelMap map) {
		return "admin/login";
	}
	
	@RequestMapping(value="loginCheckUser",method = RequestMethod.POST)
	public ModelAndView checkUser(@Param("username") String username,
			@Param("password") String password){
		
		if(!StringUtils.isNullOrEmpty(username) && !StringUtils.isNullOrEmpty(password)){
			UserAuthenticationToken token = new UserAuthenticationToken(username, password, true);
			Subject currentPsyUser = SecurityUtils.getSubject();  
			if (!currentPsyUser.isAuthenticated()){
                //使用shiro来验证  
                token.setRememberMe(true);
                currentPsyUser.login(token);//验证角色和权限  
            } 
		}
		logger.info("登录成功....");
		return new ModelAndView("admin/index");
	}
	
	
	@RequestMapping("logout")
	public ModelAndView toLogout(HttpServletRequest request, HttpServletResponse response){
		
		return new ModelAndView("admin/login");
	}

}
