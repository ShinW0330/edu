package com.fecloud.edu.cpark;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SampleController {
	
	@Autowired
	private SampleService service;
	

	@GetMapping("/sample")
	public ResponseEntity<?> getSample(@RequestParam Map<String, Object> param ){
		
		return ResponseEntity.ok(service.getEducationList());
	}
	
	@GetMapping("/findAll")
	public ResponseEntity<?> findAll(@RequestParam Map<String, Object> param ){
		
		System.out.println(param.get("a"));
		
		return ResponseEntity.ok(service.getEducationList());
	}
}
