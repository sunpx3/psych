package com.zg.core.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.zg.core.entity.PsyUserEntity;

@Mapper
public interface PsyUserEntityMapper {

    //根据用户名查询
	
    @Select("select * from psy_user u where u.username = #{username}")
    PsyUserEntity selectPsyUserByUserName(@Param("username") String username);
    
    @Select("select password from psy_user u where uid = #{uid}")
    String getUserPassword(@Param("uid")String uid);
    
    @Insert("insert into psy_user (uid ,username,password,email,salt,create_time,update_time)"
    		+ "values(#{psyUser.uid},#{psyUser.username},#{psyUser.password},#{psyUser.email},#{psyUser.salt},"
    		+ "#{psyUser.createTime},#{psyUser.updateTime})")
    void savePsyUser(@Param("psyUser") PsyUserEntity psyUser);
}