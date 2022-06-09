package com.fecloud.edu.shin;


import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BoardMapper {
	
	// 게시판 조회
	public List<Map> findAll(Map<String, Object> param);

	//게시판 등록
	public int create(Map<String, Object> param);
	
	// 게시판 수
	public List<Map> getUpdate(Map<String, Object> param);

	
	
}
