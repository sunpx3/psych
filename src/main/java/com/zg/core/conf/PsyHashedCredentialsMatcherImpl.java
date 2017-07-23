package com.zg.core.conf;

import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.apache.shiro.codec.Base64;

import com.zg.core.util.PasswordUtil;

/**
 * 重写shiro密码校验类
 * 
 * @author sunpx
 *
 */
public class PsyHashedCredentialsMatcherImpl extends SimpleCredentialsMatcher {

	@Override
	public boolean doCredentialsMatch(AuthenticationToken authenticationToken, AuthenticationInfo info) {
		UserAuthenticationToken token = (UserAuthenticationToken) authenticationToken;
		SimpleAuthenticationInfo auth = (SimpleAuthenticationInfo) info;
		//base64解密得到盐值
		Object accountSalt = Base64.decodeToString(auth.getCredentialsSalt().toString());
		//重新根据用户密码盐值加密
		Object tokenCredentials = PasswordUtil.md5Password(token.getUsername(), token.getPassword(), accountSalt.toString());
		//得到该用户密文
		Object accountCredentials = getCredentials(info);

		return equals(tokenCredentials, accountCredentials);
	}
}
