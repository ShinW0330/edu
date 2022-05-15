package com.fecloud.edu.cpark;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SampleService {

	@Autowired
	private SampleMapper mapper;
	
	public List<Map> getEducationList(){
		
		return mapper.getEducationList();
	}
}
