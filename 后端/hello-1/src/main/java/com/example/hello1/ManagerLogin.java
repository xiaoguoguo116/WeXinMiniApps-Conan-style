package com.example.hello1;
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
public class ManagerLogin {
	@RequestMapping("/Mlogin")  //登录的接口
	public String yanzheng(@RequestBody Map<String,String> data)throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
//   	//插入收藏表中
   	try {
   		String a=data.get("username");
   		String b=data.get("password");
   	//	System.out.println(a);
   		//String sql="insert into user(username,password) values("+"'"+a+"'"+","+"'"+b+"')";
   		String sql="select name from manager where name="+"'"+a+"'"+"and password="+"'"+b+"'";
	    	//String sql="INSERT INTO zhushi(`image`, `id`, `intro`, `price`) VALUES ('bbb', 3, '好吃', 6.7)";
	    	Statement sta=conn.createStatement();
	    	//sta.execute(sql);
	    	ResultSet rs=sta.executeQuery(sql);
	    	int num=0;
	    	while(rs.next())
	    	{
	    		num++;
	    	}
	    	System.out.println(sql);
	    	System.out.println(num);
	    	if(num==0)return "no";
	    	else return "yes";
			
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   	return "";
	}
}
