package com.fecloud.edu.cpark;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MemberController {
	
	@GetMapping("/front/view/register")
	public String register() {
		return "view/register";
	}
	
}
