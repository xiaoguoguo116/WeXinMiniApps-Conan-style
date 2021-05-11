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
public class GetIntroduction extends list{

	@RequestMapping("/food")  //登录的接口
	public Map<String,String> food(@RequestBody Map<String,String> data)throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
		Map<String,String>ma=new HashMap<String,String>();
//   	//插入收藏表中
   	try {
   		
   		
   		String a=data.get("id");
   		String sql="select name,intro from zhushi where id="+"'"+a+"'";
	    	Statement sta=conn.createStatement();
	    	ResultSet rs=sta.executeQuery(sql);
	    	int num=0;
	    	ma.put(rs.getString("name"),rs.getString("intro"));
	    	System.out.println(sql);
	    	System.out.println(num);
			return ma;
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   	return ma;
	}
	
}
