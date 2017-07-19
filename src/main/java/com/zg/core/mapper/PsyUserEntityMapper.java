package com.zg.core.mapper;

import com.zg.core.entity.PsyUserEntity;
import com.zg.core.entity.PsyUserEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PsyUserEntityMapper {
    int countByExample(PsyUserEntityExample example);

    int deleteByExample(PsyUserEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyUserEntity record);

    int insertSelective(PsyUserEntity record);

    List<PsyUserEntity> selectByExample(PsyUserEntityExample example);

    PsyUserEntity selectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyUserEntity record, @Param("example") PsyUserEntityExample example);

    int updateByExample(@Param("record") PsyUserEntity record, @Param("example") PsyUserEntityExample example);

    int updateByPrimaryKeySelective(PsyUserEntity record);

    int updateByPrimaryKey(PsyUserEntity record);
}