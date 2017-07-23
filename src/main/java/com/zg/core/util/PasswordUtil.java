package com.zg.core.util;

import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.Md5Hash;

import com.zg.core.entity.PsyUserEntity;

/**
 * 密码工具类
 * 
 * @author sunpx
 *
 */
public class PasswordUtil {
	/**
	 * 对密码进行md5加密,并返回密文和salt，包含在User对象中
	 * 
	 * @param username
	 *            用户名
	 * @param password
	 *            密码
	 * @return 密文和salt
	 */
	public static PsyUserEntity md5Password(String username, String password) {
		SecureRandomNumberGenerator secureRandomNumberGenerator = new SecureRandomNumberGenerator();
		String salt = secureRandomNumberGenerator.nextBytes().toHex();
		// 组合username,两次迭代，对密码进行加密
		String password_cipherText = new Md5Hash(password, username + salt, 2).toHex();
		PsyUserEntity psyUser = new PsyUserEntity();
		psyUser.setPassword(password_cipherText);
		psyUser.setSalt(salt);
		psyUser.setUsername(username);
		return psyUser;
	}
	
	public static Object md5Password(String username, String password , String salt) {
		// 组合username,两次迭代，对密码进行加密
		Object password_cipherText = new Md5Hash(password, username + salt, 2).toHex();
		return password_cipherText;
	}
	
	 /** 
     * 通过username,password,salt,校验密文是否匹配 ，校验规则其实在配置文件中，这里为了清晰，写下来 
     * @param username 用户名 
     * @param password 原密码 
     * @param salt  盐 
     * @param md5cipherText 密文 
     * @return 
     */ 
    public static  boolean checkMd5Password(String username,String password,String salt,String md5cipherText) 
    { 
        //组合username,两次迭代，对密码进行加密 
        String password_cipherText= new Md5Hash(password,username+salt,2).toHex(); 
        return md5cipherText.equals(password_cipherText); 
    }
    
    /**
     * 生成随机盐值
     * @return
     */
    private String generateSalt(){
        SecureRandomNumberGenerator secureRandom = new SecureRandomNumberGenerator();
        String hex = secureRandom.nextBytes(3).toHex(); //一个Byte占两个字节，此处生成的3字节，字符串长度为6
        return hex;
    }
}
