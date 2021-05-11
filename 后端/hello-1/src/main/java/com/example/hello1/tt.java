package com.example.hello1;
import org.springframework.web.bind.annotation.RequestMapping;


import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

@RestController
public class tt {
	@RequestMapping("/user")
    public static String Main(String a,String b) throws SQLException {
		try {
			// 加载数据库驱动类
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			System.out.println("数据库驱动加载成功");
 
			// 获取数据库连接对象
			Connection conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
					"root", "123456");
			
	    	//System.out.print(sql);
			String sql="insert into user(username,password) values("+"'"+a+"'"+","+"'"+b+"')";
	    	//String sql="INSERT INTO zhushi(`image`, `id`, `intro`, `price`) VALUES ('bbb', 3, '好吃', 6.7)";
	    	Statement sta=conn.createStatement();
	    	sta.execute(sql);
	    	System.out.println(sql);
			System.out.println("数据库连接成功");
	
			//System.out.println(select id from zhumenu);
			
		} catch (ClassNotFoundException cnfe) {
			cnfe.printStackTrace();
			System.out.println("111");
		} catch (SQLException sqle) {
			sqle.printStackTrace();
			System.out.println("3333");
		}
	
		return "hhhhh";
	}
	
	
}
