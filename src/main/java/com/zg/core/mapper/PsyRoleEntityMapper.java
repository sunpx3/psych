package com.zg.core.mapper;

import com.zg.core.entity.PsyRoleEntity;
import com.zg.core.entity.PsyRoleEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PsyRoleEntityMapper {
    int countByExample(PsyRoleEntityExample example);

    int deleteByExample(PsyRoleEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyRoleEntity record);

    int insertSelective(PsyRoleEntity record);

    List<PsyRoleEntity> selectByExample(PsyRoleEntityExample example);

    PsyRoleEntity selectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyRoleEntity record, @Param("example") PsyRoleEntityExample example);

    int updateByExample(@Param("record") PsyRoleEntity record, @Param("example") PsyRoleEntityExample example);

    int updateByPrimaryKeySelective(PsyRoleEntity record);

    int updateByPrimaryKey(PsyRoleEntity record);
}