package com.zg.generator;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;

public class Test {


	public static void main(String[] args) {
		// 初始化 SecurityManager
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);

		// 获取当前用户
		Subject subject = SecurityUtils.getSubject();

		// 登录
		UsernamePasswordToken token = new UsernamePasswordToken("shiro", "201314");
		try {
			subject.login(token);
		} catch (AuthenticationException ae) {
			System.out.println("error");
			return;
		}
		if(subject.isAuthenticated()){
			System.out.println("success！");
		}

		// 注销
		subject.logout();

	}
}
