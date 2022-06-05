package com.fecloud.edu.shin;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service // bean 
public class BoardService {

	@Autowired
	private BoardMapper mapper;

	
	public List<Map> findAll(Map<String, Object> param) {
		
		return mapper.findAll(param); 
	}


	public int create(Map<String, Object> param) {
		
		return mapper.create(param);
	}




}