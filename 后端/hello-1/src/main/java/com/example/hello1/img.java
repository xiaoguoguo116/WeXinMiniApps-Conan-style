package com.example.hello1;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Map;
import java.sql.ResultSet;
@RestController
public class img {
	@RequestMapping("/img") 
	public String[] imm()throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
		String[] ans=new String[40];
//   	//插入收藏表中
   	try {
   		String sql="select * from img";
	    	Statement sta=conn.createStatement();
	    	ResultSet rs=sta.executeQuery(sql);
	    	int num=0;
	    	while(rs.next()) {
	    		ans[num++]=rs.getString("img");
	    	}
	    	System.out.println(sql);
	    
			
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   return ans;
	}
}
