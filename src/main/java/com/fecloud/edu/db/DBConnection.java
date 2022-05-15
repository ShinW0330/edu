package com.fecloud.edu.db;

import java.sql.Connection;
import java.sql.DriverManager;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class DBConnection {

	@Value("${spring.datasource.driver-class-name}")
	private String driver;
	@Value("${spring.datasource.url}")
	private String url;
	@Value("${spring.datasource.username}")
	private String user;
	@Value("${spring.datasource.password}")
	private String password;

	public Connection getConnection() throws Exception {
		// DBMS에게 DB 연결 드라이버의 위치를 알려주기 위한 메소드
		Class.forName(driver);
		try {
			return DriverManager.getConnection(url, user, password);

		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}