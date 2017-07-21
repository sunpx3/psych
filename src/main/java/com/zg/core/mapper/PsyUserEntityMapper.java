package com.zg.core.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.test.context.jdbc.Sql;

import com.zg.core.entity.PsyUserEntity;

@Mapper
public interface PsyUserEntityMapper {

    //根据用户名查询
	
    @Sql("select * from psy_user u where u.username = #{username}")
    PsyUserEntity selectPsyUserByUserName(@Param("username") String username);
}