package com.zg.core.mapper;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.test.context.jdbc.Sql;

@Mapper
public interface PsyUserEntityMapper {
    int countByExample(PsyUserEntityExample example);

    int deleteByExample(PsyUserEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyUserEntity record);

    int insertSelective(PsyUserEntity record);

    List<PsyUserEntity> selectByExample(PsyUserEntityExample example);

    PsyUserEntity selectByPrimaryKeyselectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyUserEntity record, @Param("example") PsyUserEntityExample example);

    int updateByExample(@Param("record") PsyUserEntity record, @Param("example") PsyUserEntityExample example);

    int updateByPrimaryKeySelective(PsyUserEntity record);

    int updateByPrimaryKey(PsyUserEntity record);
    
    //根据用户名查询
    @Sql("select * from psy_user u where u.username = :username")
    PsyUserEntity selectPsyUserByUserName(@Param("username") String username);
}