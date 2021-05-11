package com.example.hello1;
import java.sql.Connection;
import java.sql.DriverManager;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;
import java.sql.ResultSet;
@RestController
public class dele {
	@RequestMapping("/reset")
	public void xiugai(@RequestBody Map<String,String> data) throws SQLException, ClassNotFoundException{
	Class.forName("com.mysql.cj.jdbc.Driver");
	System.out.println("数据库驱动加载成功");
	Connection conn = DriverManager.getConnection(
			"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
			"root", "123456");
	try {
		String a=data.get("id");
		String b=data.get("xiugaipassword");
	//	System.out.println(a);
		String sql="delete from zhushi where id="+"'"+a+"'";
    	//String sql="INSERT INTO zhushi(`image`, `id`, `intro`, `price`) VALUES ('bbb', 3, '好吃', 6.7)";
    	Statement sta=conn.createStatement();
    	sta.execute(sql);
    	System.out.println(sql);
		System.out.println("数据库连接成功");
	}
	catch(SQLException e){
		conn.close();
		System.out.print(e);
		
	}
	
}
}
