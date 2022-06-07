package com.fecloud.edu.shin;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BoardMapper {

	public List<Map> findAll(Map<String, Object> param);

	public int create(Map<String, Object> param);

	public List<Map> getUpdate(Map<String, Object> param);

	
	
}
