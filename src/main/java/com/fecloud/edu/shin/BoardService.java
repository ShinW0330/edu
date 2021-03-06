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
	
	public List<Map> editfind(Map<String, Object> param) {
		return mapper.editfind(param); 
	}

	public int create(Map<String, Object> param) {
		
		return mapper.create(param);
	}


	public int getUpdate(Map<String, Object> param) {
		return mapper.getUpdate(param);
	}
	
	public int delete(Map<String, Object> param) {
		return mapper.delete(param);
	}


	



	


}