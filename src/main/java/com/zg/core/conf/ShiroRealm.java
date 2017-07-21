package com.zg.core.conf;

import java.util.ArrayList;
import java.util.List;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.credential.CredentialsMatcher;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserRoleEntity;
import com.zg.core.mapper.PsyUserEntityMapper;
import com.zg.core.mapper.PsyUserRoleEntityMapper;

public class ShiroRealm extends AuthorizingRealm {
	
	public ShiroRealm(CacheManager cacheManager, CredentialsMatcher matcher) {
		super(cacheManager, matcher);
	}

	@Autowired
	private PsyUserEntityMapper psyUserEntityMapper;
	
	@Autowired
	private PsyUserRoleEntityMapper psyUserRoleEntityMapper;

	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection paramPrincipalCollection) {
		SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
		PsyUserEntity psyUserEntity = (PsyUserEntity) SecurityUtils.getSubject().getSession().getAttribute(WebKeysUtils.LOGIN_USER);
		if (psyUserEntity != null) {
			// 当前用户角色编码集合
			List<String> roleIds = new ArrayList<>();

			for (PsyUserRoleEntity role : psyUserRoleEntityMapper.selectPsyUserRoleListByUserId(psyUserEntity)) {
				roleIds.add(String.valueOf(role.getUid()));
			}
			authorizationInfo.addRoles(roleIds);

			//TODO add permits
			//authorizationInfo.addStringPermissions(null);

		}
		return authorizationInfo;
	}

	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken)  throws AuthenticationException {
		UserAuthenticationToken token = (UserAuthenticationToken) authenticationToken;
		if (StringUtils.isEmpty(token.getUsername())) {
			throw new IncorrectCredentialsException("username is null!");
		} else if (StringUtils.isEmpty(token.getCredentials())) {
			throw new IncorrectCredentialsException("password is null!");
		}
		PsyUserEntity user = psyUserEntityMapper.selectPsyUserByUserName(token.getUsername());
		if (user == null) { // 用户不存在
			throw new UnknownAccountException("The user does not exist");
		}
		//String userPassword = userService.getUserPassword(user.getUid());
		return new SimpleAuthenticationInfo(token.getUsername(), user.getPassword(), getName());
	}
}