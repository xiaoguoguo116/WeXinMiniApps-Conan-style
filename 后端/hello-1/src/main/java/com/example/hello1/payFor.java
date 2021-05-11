package com.example.hello1;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
import java.sql.ResultSet;
@RestController
public class payFor {
	@RequestMapping("/payfor") 
	public String add(@RequestBody Map<String,String> data)throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
	 	try {
	 		String a=data.get("username");
	 		String b=data.get("money");
	 		Statement sta=conn.createStatement();
	 		String sql1="select money from cunkuan where username="+"'"+a+"'";
	 		System.out.println(sql1);
	 		ResultSet rs1=sta.executeQuery(sql1);
	 		if(rs1.getFloat("money")-Integer.parseInt(b)>0)
	 		{
	 			String sql="update cunkuan set money=money-"+"'"+b+"'"+"where username="+"'"+a+"'" ;
	 			System.out.println(sql);
	 			return "yes";
	 		}
	   	}
	   	catch(SQLException e){
	   		conn.close();
	   		System.out.print(e);
	   		
	   	}
	 	return "no";
	}
	
}
