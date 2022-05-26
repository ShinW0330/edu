package com.fecloud.edu.cpark;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SampleController {
	
	@Autowired //의존성 주입
	private SampleService service;
	

	@GetMapping("/sample")
	public Object getSample(@RequestParam Map<String, Object> param ){
		
		return service.findAll();
	}
	
	@GetMapping("/findAll")
	public ResponseEntity<?> findAll(@RequestParam Map<String, Object> param ){
		
		System.out.println(param.get("a"));
		
		return ResponseEntity.ok(service.getEducationList());
	}
	
	@PutMapping("/sample")
	public ResponseEntity<?> putSample(@RequestBody Map<String, Object> param) {
		
		return ResponseEntity.ok(service.putSample(param));
	}
}

