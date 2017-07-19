package com.zg.core.mapper;

import com.zg.core.entity.PsyRoleMenuEntity;
import com.zg.core.entity.PsyRoleMenuEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PsyRoleMenuEntityMapper {
    int countByExample(PsyRoleMenuEntityExample example);

    int deleteByExample(PsyRoleMenuEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyRoleMenuEntity record);

    int insertSelective(PsyRoleMenuEntity record);

    List<PsyRoleMenuEntity> selectByExample(PsyRoleMenuEntityExample example);

    PsyRoleMenuEntity selectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyRoleMenuEntity record, @Param("example") PsyRoleMenuEntityExample example);

    int updateByExample(@Param("record") PsyRoleMenuEntity record, @Param("example") PsyRoleMenuEntityExample example);

    int updateByPrimaryKeySelective(PsyRoleMenuEntity record);

    int updateByPrimaryKey(PsyRoleMenuEntity record);
}