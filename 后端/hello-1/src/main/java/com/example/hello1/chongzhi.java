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
public class chongzhi {
	@RequestMapping("/chongzhi") 
	public void add(@RequestBody Map<String,String> data)throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
		list[] ans=new list[40];
//   	//插入收藏表中
   	try {
   		
   		String a=data.get("money");
   		String b=data.get("username");
   		String sql="update cunkuan set money="+"'"+b+"'"+"money where username="+"'"+a+"'";
	    	Statement sta=conn.createStatement();
	    	sta.execute(sql);
	    	System.out.println(sql);
	    
			
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   
	}
}
