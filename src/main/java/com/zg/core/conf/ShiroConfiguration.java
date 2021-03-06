package com.zg.core.conf;

import java.util.LinkedHashMap;
import java.util.Map;

import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.cache.ehcache.EhCacheManager;
import org.apache.shiro.codec.Base64;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.mgt.ExecutorServiceSessionValidationScheduler;
import org.apache.shiro.session.mgt.eis.EnterpriseCacheSessionDAO;
import org.apache.shiro.spring.LifecycleBeanPostProcessor;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.CookieRememberMeManager;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.apache.shiro.web.servlet.SimpleCookie;
import org.apache.shiro.web.session.mgt.DefaultWebSessionManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.config.MethodInvokingFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

/**
 * Shiro 配置
 *
 * Apache Shiro 核心通过 Filter 来实现，就好像SpringMvc 通过DispachServlet 来主控制一样。 既然是使用
 * Filter 一般也就能猜到，是通过URL规则来进行过滤和权限校验，所以我们需要定义一系列关于URL的规则和访问权限。
 */
@Configuration
public class ShiroConfiguration {

	private static Map<String, String> filterChainDefinitionMap = new LinkedHashMap<String, String>();

	@Bean(name = "cacheShiroManager")
	public CacheManager getCacheManage() {
		return new EhCacheManager();
	}

	@Bean(name = "lifecycleBeanPostProcessor")
	public LifecycleBeanPostProcessor getLifecycleBeanPostProcessor() {
		return new LifecycleBeanPostProcessor();
	}

	@Bean(name = "sessionValidationScheduler")
	public ExecutorServiceSessionValidationScheduler getExecutorServiceSessionValidationScheduler() {
		ExecutorServiceSessionValidationScheduler scheduler = new ExecutorServiceSessionValidationScheduler();
		scheduler.setInterval(900000);
		return scheduler;
	}
	//关闭自带密码校验，由自己实现 
//	@Bean(name = "hashedCredentialsMatcher")
//	public HashedCredentialsMatcher getHashedCredentialsMatcher() {
//		HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();
//		credentialsMatcher.setHashAlgorithmName("MD5");
//		credentialsMatcher.setHashIterations(1);
//		credentialsMatcher.setStoredCredentialsHexEncoded(true);
//		return credentialsMatcher;
//	}
	//重写密码校验
	@Bean(name = "psyCredentialsMatcher")
	public PsyHashedCredentialsMatcherImpl getHashedCredentialsMatcher() {
		PsyHashedCredentialsMatcherImpl psyCredentialsMatcher = new PsyHashedCredentialsMatcherImpl();
		return psyCredentialsMatcher;
	}
	

	@Bean(name = "sessionIdCookie")
	public SimpleCookie getSessionIdCookie() {
		SimpleCookie cookie = new SimpleCookie("sid");
		cookie.setHttpOnly(true);
		cookie.setMaxAge(-1);
		return cookie;
	}

	@Bean(name = "rememberMeCookie")
	public SimpleCookie getRememberMeCookie() {
		SimpleCookie simpleCookie = new SimpleCookie("rememberMe");
		simpleCookie.setHttpOnly(true);
		simpleCookie.setMaxAge(2592000);
		return simpleCookie;
	}
	
	@Bean
	public CookieRememberMeManager getRememberManager(){
		CookieRememberMeManager meManager = new CookieRememberMeManager();
		meManager.setCipherKey(Base64.decode("4AvVhmFLUs0KTA3Kprsdag=="));
		meManager.setCookie(getRememberMeCookie());
		return meManager;
	}
	
	@Bean(name = "sessionManager")
	public DefaultWebSessionManager getSessionManage() {
		DefaultWebSessionManager sessionManager = new DefaultWebSessionManager();
		sessionManager.setGlobalSessionTimeout(1800000);
		sessionManager.setSessionValidationScheduler(getExecutorServiceSessionValidationScheduler());
		sessionManager.setSessionValidationSchedulerEnabled(true);
		sessionManager.setDeleteInvalidSessions(true);
		sessionManager.setSessionIdCookieEnabled(true);
		sessionManager.setSessionIdCookie(getSessionIdCookie());
		EnterpriseCacheSessionDAO cacheSessionDAO = new EnterpriseCacheSessionDAO();
		cacheSessionDAO.setCacheManager(getCacheManage());
		sessionManager.setSessionDAO(cacheSessionDAO);
		// -----可以添加session 创建、删除的监听器
		
		return sessionManager;
	}
	
	@Bean(name = "myRealm")
	public AuthorizingRealm getShiroRealm() {
		AuthorizingRealm realm = new ShiroRealm(getCacheManage(), getHashedCredentialsMatcher());
		realm.setName("shiro_auth_cache");
		realm.setAuthenticationCache(getCacheManage().getCache(realm.getName()));
		realm.setAuthenticationTokenClass(UserAuthenticationToken.class);
		return realm;
	}
	
	@Bean(name = "securityManager")
	public DefaultWebSecurityManager getSecurityManager() {
		DefaultWebSecurityManager securityManager = new DefaultWebSecurityManager();
		securityManager.setCacheManager(getCacheManage());
		securityManager.setSessionManager(getSessionManage());
		securityManager.setRememberMeManager(getRememberManager());
		securityManager.setRealm(getShiroRealm());
		return securityManager;
	}
	
	@Bean
	public MethodInvokingFactoryBean getMethodInvokingFactoryBean(){
		MethodInvokingFactoryBean factoryBean = new MethodInvokingFactoryBean();
		factoryBean.setStaticMethod("org.apache.shiro.SecurityUtils.setSecurityManager");
		factoryBean.setArguments(new Object[]{getSecurityManager()});
		return factoryBean;
	}
	
	@Bean
	@DependsOn("lifecycleBeanPostProcessor")
	public DefaultAdvisorAutoProxyCreator getAutoProxyCreator(){
		DefaultAdvisorAutoProxyCreator creator = new DefaultAdvisorAutoProxyCreator();
		creator.setProxyTargetClass(true);
		return creator;
	}
	
	@Bean
	public AuthorizationAttributeSourceAdvisor getAuthorizationAttributeSourceAdvisor(){
		AuthorizationAttributeSourceAdvisor advisor = new AuthorizationAttributeSourceAdvisor();
		advisor.setSecurityManager(getSecurityManager());
		return advisor;
	}
	
	@Bean(name = "shiroFilter")
	public ShiroFilterFactoryBean getShiroFilterFactoryBean(){
		ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
		factoryBean.setSecurityManager(getSecurityManager());
		factoryBean.setLoginUrl("/console/login");
		//factoryBean.setSuccessUrl("/console/index");
		factoryBean.setUnauthorizedUrl("/console/login");
		filterChainDefinitionMap.put("/dist/**", "anon");
		filterChainDefinitionMap.put("/plugins/**", "anon");
        filterChainDefinitionMap.put("/**/login", "anon");
        filterChainDefinitionMap.put("/**/loginCheckUser", "anon");
		filterChainDefinitionMap.put("/register**", "anon");
		//filterChainDefinitionMap.put("/**", "user");
		
		factoryBean.setFilterChainDefinitionMap(filterChainDefinitionMap);
		return factoryBean;
	}


}