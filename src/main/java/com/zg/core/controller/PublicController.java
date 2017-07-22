package com.zg.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.mysql.jdbc.StringUtils;
import com.zg.core.conf.UserAuthenticationToken;
import com.zg.core.entity.PsyUserEntity;
import com.zg.core.services.PsyUserServices;
import com.zg.core.util.ReturnUtil;
import com.zg.core.util.ViewUtil;

/**
 * 系统访问入口
 * 
 * @author sunpx
 *
 */
@Controller
public class PublicController {

	private Logger logger = Logger.getLogger(PublicController.class);
	
	@Autowired
	private PsyUserServices psyUserservices;

	@RequestMapping("login")
	public String index(ModelMap map) {
		return "admin/login";
	}

	@RequestMapping(value = "loginCheckUser", method = RequestMethod.POST)
	public ModelAndView checkUser(@Param("username") String username, @Param("password") String password) {

		String resultMessage = "";
		try {
			if (!StringUtils.isNullOrEmpty(username) && !StringUtils.isNullOrEmpty(password)) {
				UserAuthenticationToken token = new UserAuthenticationToken(username, password, true);
				Subject currentPsyUser = SecurityUtils.getSubject();
				token.setRememberMe(true);
				currentPsyUser.login(token);// 验证角色和权限
				if (currentPsyUser.isAuthenticated()) {
					logger.info("登录成功....");
					return ViewUtil.forwardUrl("admin/index");
				} else {
					resultMessage = "系统异常，请联系管理员!";
					logger.error(resultMessage);
					return ViewUtil.forwardUrl("admin/login", ReturnUtil.Error(resultMessage));
				}
			}

		} catch (IncorrectCredentialsException e) {
			resultMessage = e.getMessage();
		} catch (UnknownAccountException e) {
			resultMessage = e.getMessage();
		} catch (Exception e) {
			resultMessage = "系统异常，请联系管理员!";
		}
		logger.error(resultMessage);
		return ViewUtil.forwardUrl("admin/login", ReturnUtil.Error(resultMessage));
	}

	/**
	 * 用户注册
	 * @param psyUser
	 * @return
	 */
	@RequestMapping(value = "registerUser", method = RequestMethod.POST)
	public ModelAndView registerUser(@Param("regUsername") String regUsername,
			@Param("regPassword") String regPassword,
			@Param("regEmail")    String regEmail) {

		try {
			PsyUserEntity psyUser = new PsyUserEntity(regUsername, regPassword , regEmail);
			psyUserservices.registerUser(psyUser);
			return ViewUtil.forwardUrl("admin/login");
		}catch(IncorrectCredentialsException e){
			logger.error(e.getMessage());
		} catch (Exception e) {
			logger.error(e.getMessage());
		}
		
		return ViewUtil.redirectUrl("admin/login");
	}

	/**
	 * 登出
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("logout")
	public ModelAndView toLogout(HttpServletRequest request, HttpServletResponse response) {
		Subject currentPsyUser = SecurityUtils.getSubject();
		currentPsyUser.logout();
		return ViewUtil.forwardUrl("admin/login");
	}

}
