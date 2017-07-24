package com.zg.core.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserRoleEntity;

@Mapper
public interface PsyUserRoleEntityMapper {
   
	@Select("select ur.uid,ur.psy_user_uid psyUserUid,ur.psy_role_uid psyRoleUid ,ur.create_time createTime, ur.update_time updateTime, ur.remark remark "
			+ " from psy_user_role ur where ur.psy_user_uid =  #{psyUserUid}")
    List<PsyUserRoleEntity> selectPsyUserRoleListByUserId(@Param("psyUserUid") String psyUserUid);
    
}