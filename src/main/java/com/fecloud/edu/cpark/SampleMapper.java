package com.fecloud.edu.cpark;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SampleMapper {

	
	
	@Select("select * from education")
	public List<Map> getEducationList();
	
	public List<Map> findAll();
}
