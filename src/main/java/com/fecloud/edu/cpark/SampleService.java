

package com.fecloud.edu.cpark;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service // bean 
public class SampleService {

	@Autowired
	private SampleMapper mapper;

	public List<Map> getEducationList() {

		return mapper.findAll();
	}

	public List<Map> findAll() {

		return mapper.findAll();
	}
	
	// input 
	public int putSample(Map<String, Object> param) { 
	
		return mapper.putSample(param);
	}
}

