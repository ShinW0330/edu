package com.fecloud.edu.cpark;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {
	
	@Autowired
	private SampleService service;
	

	@GetMapping("/sample")
	public ResponseEntity<?> getSample(){
		
		return ResponseEntity.ok(service.getEducationList());
	}
}
