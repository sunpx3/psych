package com.zg.core.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserRoleEntity;

@Mapper
public interface PsyUserRoleEntityMapper {
   
	@Select("select * from psy_user_role ur where ur.psy_user_uid = #{psyUser.uid}")
    List<PsyUserRoleEntity> selectPsyUserRoleListByUserId(@Param("psyUser") PsyUserEntity psyUser);
    
    
}