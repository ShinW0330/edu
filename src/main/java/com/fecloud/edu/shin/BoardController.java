package com.fecloud.edu.shin;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BoardController {
	
	@Autowired //의존성 주입
	private BoardService service;
	
	
	@GetMapping("/findAll")
	public ResponseEntity<?> findAll(@RequestParam Map<String, Object> param ){
		
		return ResponseEntity.ok(service.findAll(param));
	}
	
	@PostMapping("/create")
	public ResponseEntity<?> create(@RequestBody Map<String, Object> param ){
		
		return ResponseEntity.ok(service.create(param));
	}
	
	
	@GetMapping("/editfind")
	public ResponseEntity<?> editfind(@RequestParam Map<String, Object> param ){
		
		return ResponseEntity.ok(service.editfind(param));
	}
	
	// 게시판 수정 
	@GetMapping("/getUpdate")
	public ResponseEntity<?> getUpdate (@RequestBody Map<String, Object> param){
		return ResponseEntity.ok(service.getUpdate(param));
		
	}
	
	@PostMapping("/delete")
public ResponseEntity<?> delete(@RequestBody Map<String, Object> param ){
		
		return ResponseEntity.ok(service.delete(param));
	}
	
	
}

