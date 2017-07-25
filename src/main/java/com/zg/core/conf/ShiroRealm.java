package com.zg.core.conf;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
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
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserRoleEntity;
import com.zg.core.mapper.PsyUserEntityMapper;
import com.zg.core.mapper.PsyUserRoleEntityMapper;
import com.zg.core.util.PasswordUtil;

public class ShiroRealm extends AuthorizingRealm {

	private Logger logger = Logger.getLogger(ShiroRealm.class);

	public ShiroRealm(CacheManager cacheManager, CredentialsMatcher matcher) {
		super(cacheManager, matcher);
	}

	@Autowired
	private PsyUserEntityMapper psyUserEntityMapper;

	@Autowired
	private PsyUserRoleEntityMapper psyUserRoleEntityMapper;

	/*
	 * 当没有使用缓存的时候，不断刷新页面的话，这个代码会不断执行， 当其实没有必要每次都重新设置权限信息，所以我们需要放到缓存中进行管理；
	 * 当放到缓存中时，这样的话，doGetAuthorizationInfo就只会执行一次了， 缓存过期之后会再次执行。
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection paramPrincipalCollection) {
		SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
		String psyUserName = (String) SecurityUtils.getSubject().getSession().getAttribute(WebKeysUtils.LOGIN_USER_NAME);
		if (!"".equals(psyUserName)) {
			PsyUserEntity psyUserEntity = psyUserEntityMapper.selectPsyUserByUserName(psyUserName);
			if (psyUserEntity != null) {
				// 当前用户角色编码集合
				List<String> roleIds = new ArrayList<>();
				List<PsyUserRoleEntity> roleList = psyUserRoleEntityMapper.selectPsyUserRoleListByUserId(psyUserEntity.getUid());
				for (PsyUserRoleEntity roleUser : roleList) {
					roleIds.add(String.valueOf(roleUser.getPsyRoleUid()));
				}
				authorizationInfo.addRoles(roleIds);

				//getPermissions(info)
				// TODO add permits
				// authorizationInfo.addStringPermissions(null);
			}
		}

		return authorizationInfo;
	}

	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
		UserAuthenticationToken token = (UserAuthenticationToken) authenticationToken;
		if (StringUtils.isEmpty(token.getUsername())) {
			throw new IncorrectCredentialsException("用户名不能为空！");
		} else if (StringUtils.isEmpty(token.getCredentials())) {
			throw new IncorrectCredentialsException("密码不能为空！");
		}
		PsyUserEntity user = psyUserEntityMapper.selectPsyUserByUserName(token.getUsername());
		if (user == null) { // 用户不存在
			throw new UnknownAccountException("该用户不存在!");
		}
		// 得到加密后密文
		// String userPassword = PasswordUtil.md5Password(token.getUsername(),
		// token.getPassword(), user.getSalt());
		// boolean isPwdStatus =
		// PasswordUtil.checkMd5Password(token.getUsername(),
		// token.getPassword(), user.getSalt(), user.getPassword());
		// if (!isPwdStatus) {
		// throw new IncorrectCredentialsException("The password is error!");
		// }
		SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(user, // 用户名
				user.getPassword(), // 密码
				ByteSource.Util.bytes(user.getSalt()), user.getUsername() // realm
																			// name
		);

		return authenticationInfo;
	}
}
