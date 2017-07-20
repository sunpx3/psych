package com.zg.core.mapper;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserRoleEntity;
import com.zg.core.entity.PsyUserRoleEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.test.context.jdbc.Sql;

@Mapper
public interface PsyUserRoleEntityMapper {
    int countByExample(PsyUserRoleEntityExample example);

    int deleteByExample(PsyUserRoleEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyUserRoleEntity record);

    int insertSelective(PsyUserRoleEntity record);

    List<PsyUserRoleEntity> selectByExample(PsyUserRoleEntityExample example);

    PsyUserRoleEntity selectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyUserRoleEntity record, @Param("example") PsyUserRoleEntityExample example);

    int updateByExample(@Param("record") PsyUserRoleEntity record, @Param("example") PsyUserRoleEntityExample example);

    int updateByPrimaryKeySelective(PsyUserRoleEntity record);

    int updateByPrimaryKey(PsyUserRoleEntity record);
    
    @Sql("select * from psy_user_role ur where ur.psy_user_uid = :psyUser.uid")
    List<PsyUserRoleEntity> selectPsyUserRoleListByUserId(@Param("psyUser") PsyUserEntity psyUser);
    
    
}