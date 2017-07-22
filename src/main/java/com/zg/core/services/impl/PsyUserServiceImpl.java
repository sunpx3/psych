package com.zg.core.services.impl;

import java.util.Date;
import java.util.UUID;

import org.apache.shiro.authc.IncorrectCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.mapper.PsyUserEntityMapper;
import com.zg.core.services.PsyUserServices;
import com.zg.core.util.PasswordUtil;

@Transactional
@Service
public class PsyUserServiceImpl implements PsyUserServices{

	@Autowired
	private PsyUserEntityMapper mapper;
	
	@Override
	public PsyUserEntity registerUser(PsyUserEntity psyUser) {
		
		PsyUserEntity psyUserNew = new PsyUserEntity();
		if(psyUser != null) {
			if(psyUser.getUsername().equals("")||psyUser.getUsername() == null) {
				throw new IncorrectCredentialsException("用户名不能为空!");
			}
			if(psyUser.getPassword().equals("") || psyUser.getPassword() == null) {
				throw new IncorrectCredentialsException("密码不能为空！");
			}
			if(psyUser.getEmail().equals("") || psyUser.getEmail() == null) {
				throw new IncorrectCredentialsException("密码不能为空！");
			}
			
			//判断用户是否已存在
			PsyUserEntity psyUserOld = mapper.selectPsyUserByUserName(psyUser.getUsername());
			if(psyUserOld != null ) {
				throw new IncorrectCredentialsException("用户已存在！");
			}
			
			//对密码进行盐值加密
			psyUserNew = PasswordUtil.md5Password(psyUser.getUsername(), psyUser.getPassword());
			psyUserNew.setUid(UUID.randomUUID().toString().replace("-", ""));
			psyUserNew.setCreateTime(new Date().toString());
			psyUserNew.setEmail(psyUser.getEmail());
			mapper.savePsyUser(psyUserNew);
		}
		
		return psyUserNew;
	}

	@Override
	public PsyUserEntity getUserByUserName(String username) {
		return mapper.selectPsyUserByUserName(username);
	}
}
