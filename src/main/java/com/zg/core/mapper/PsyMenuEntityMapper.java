package com.zg.core.mapper;

import com.zg.core.entity.PsyMenuEntity;
import com.zg.core.entity.PsyMenuEntityExample;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface PsyMenuEntityMapper {
    int countByExample(PsyMenuEntityExample example);

    int deleteByExample(PsyMenuEntityExample example);

    int deleteByPrimaryKey(String uid);

    int insert(PsyMenuEntity record);

    int insertSelective(PsyMenuEntity record);

    List<PsyMenuEntity> selectByExample(PsyMenuEntityExample example);

    PsyMenuEntity selectByPrimaryKey(String uid);

    int updateByExampleSelective(@Param("record") PsyMenuEntity record, @Param("example") PsyMenuEntityExample example);

    int updateByExample(@Param("record") PsyMenuEntity record, @Param("example") PsyMenuEntityExample example);

    int updateByPrimaryKeySelective(PsyMenuEntity record);

    int updateByPrimaryKey(PsyMenuEntity record);
}