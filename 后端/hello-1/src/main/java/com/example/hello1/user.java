package com.example.hello1;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;
@RestController
public class user {
	@RequestMapping("/yue")
	public String user(@RequestBody Map<String,String> data) throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection (
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
		ResultSet rs = null;
		String ans="";
//   	//插入收藏表中
   	try {
   		String b=data.get("username");
   		//String a=name.get("username");
   		String sql="select money from cunkuan where username="+"'"+b+"'";
   		System.out.print(sql);
	    	//String sql="INSERT INTO zhushi(`image`, `id`, `intro`, `price`) VALUES ('bbb', 3, '好吃', 6.7)";
	    	Statement sta=conn.createStatement();
	    	//sta.execute(sql);
	    	rs=sta.executeQuery(sql);
	    	//System.out.print(rs);
	    	//ans=rs.getFloat("money");
	    	while(rs.next())
	    	{
	    		ans=rs.getString("money");
	    	}
	    	System.out.print(ans);
			
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   	return ans;
	}
	
}
