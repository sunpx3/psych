package com.zg.generator;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

public class Test {


	public static void main(String[] args) {
		// 初始化 SecurityManager
//		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro.ini");
//		SecurityManager securityManager = factory.getInstance();
//		SecurityUtils.setSecurityManager(securityManager);
//
//		// 获取当前用户
//		Subject subject = SecurityUtils.getSubject();
//
//		// 登录
//		UsernamePasswordToken token = new UsernamePasswordToken("shiro", "201314");
//		try {
//			subject.login(token);
//		} catch (AuthenticationException ae) {
//			System.out.println("error");
//			return;
//		}
//		if(subject.isAuthenticated()){
//			System.out.println("success！");
//		}
//
//		// 注销
//		subject.logout();
//		
		System.out.println(UUID.randomUUID().toString().replace("-", ""));
		//SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		//System.out.println(df.format(new Date()));

	}
}
