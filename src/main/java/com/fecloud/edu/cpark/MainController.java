package com.fecloud.edu.cpark;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller 
public class MainController {
	
	@RequestMapping("/front")
	public String index() {
		return "index";
	}
}
