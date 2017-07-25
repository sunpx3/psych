package com.zg.core.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.zg.core.conf.UserAuthenticationToken;
import com.zg.core.conf.WebKeysUtils;
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
@RequestMapping(value = "/console")
public class PublicController {

	private Logger logger = Logger.getLogger(PublicController.class);

	@Autowired
	private PsyUserServices psyUserservices;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String loginForm() {
		return "admin/login";
	}

	@RequestMapping(value = "loginCheckUser", method = RequestMethod.POST)
	public ModelAndView checkUser(@Param("username") String username, @Param("password") String password, RedirectAttributes redirectAttributes) {

		String resultMessage = "";
		Subject currentPsyUser = SecurityUtils.getSubject();
		UserAuthenticationToken token = new UserAuthenticationToken(username, password, true);
		token.setRememberMe(true);

		try {
			logger.info("验证开始......");
			currentPsyUser.login(token);// 验证角色和权限
			logger.info("验证通过......");
		} catch (UnknownAccountException e) {
			resultMessage = e.getMessage();
			logger.error("验证失败.....未知用户" + resultMessage);
		} catch (IncorrectCredentialsException e) {
			resultMessage = e.getMessage();
			logger.error("验证失败.....错误凭据" + resultMessage);
		} catch (AuthorizationException e) {
			resultMessage = e.getMessage();
			logger.error("权限不足，请联系管理员！" + resultMessage);
		} catch (Exception e) {
			resultMessage = e.getMessage();
			logger.error("系统异常，请联系管理员!" + resultMessage);
		}

		// 验证是否登录成功
		if (currentPsyUser.isAuthenticated()) {
			logger.info("登录成功....正在进入系统..");
			// 保存登录用户名到session
			Session session = SecurityUtils.getSubject().getSession();
			session.setTimeout(-10001);
			session.setAttribute(WebKeysUtils.LOGIN_USER_NAME, token.getUsername());
			return ViewUtil.redirectUrl("/console/index");
		} else {
			// 重定向后带参传递。
			redirectAttributes.addFlashAttribute("modelMap", ReturnUtil.Error(resultMessage));
			logger.error(resultMessage);
			return ViewUtil.redirectUrl("/console/login");
		}

		// return ReturnUtil.Success(resultMessage, "admin/index", "");
	}

	/**
	 * 用户注册
	 * 
	 * @param psyUser
	 * @return
	 */
	@RequestMapping(value = "registerUser", method = RequestMethod.POST)
	public ModelAndView registerUser(@Param("regUsername") String regUsername, @Param("regPassword") String regPassword, @Param("regEmail") String regEmail) {

		try {
			PsyUserEntity psyUser = new PsyUserEntity(regUsername, regPassword, regEmail);
			psyUserservices.registerUser(psyUser);
			return ViewUtil.forwardUrl("admin/login");
		} catch (IncorrectCredentialsException e) {
			logger.error(e.getMessage());
		} catch (Exception e) {
			logger.error(e.getMessage());
		}

		return ViewUtil.redirectUrl("/console/login");
	}

	/**
	 * 登出
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping("logout")
	public ModelAndView toLogout(HttpServletRequest request, HttpServletResponse response) {
		Subject currentPsyUser = SecurityUtils.getSubject();
		currentPsyUser.logout();
		logger.info("已退出系统.....");
		return ViewUtil.redirectUrl("/console/login");
	}

	@RequestMapping("/404")
	public ModelAndView error() {
		return ViewUtil.redirectUrl("/common/404");
	}

}
