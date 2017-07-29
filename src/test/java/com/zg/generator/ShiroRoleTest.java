package com.zg.generator;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.annotation.RequiresRoles;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.junit.Before;
import org.junit.Test;


public class ShiroRoleTest {

	private Subject subject;
	
	@Before
	public void begin(){
		
		// 初始化 SecurityManager
		Factory<SecurityManager> factory = new IniSecurityManagerFactory("classpath:shiro-role.ini");
		SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);

		// 获取当前用户
		subject = SecurityUtils.getSubject();

		// 登录
		UsernamePasswordToken token = new UsernamePasswordToken("wang", "123");
		try {
			subject.login(token);
		} catch (AuthenticationException ae) {
			System.out.println("error");
			return;
		}
		if(subject.isAuthenticated()){
			System.out.println("success！");
		}
	}
	
	@Test
	public void test(){
		if(subject.hasRole("role1")){
			ShiroRoleTest.hello();
		}
	}
	
	@RequiresRoles("admin")
	public static void hello(){
		System.out.println("HelloWorld!");
	}

	
}
