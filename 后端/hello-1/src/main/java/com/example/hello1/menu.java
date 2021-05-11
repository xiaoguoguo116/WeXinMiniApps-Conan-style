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
public class menu {
	@RequestMapping("/menu")  //登录的接口
	public list[] yanzheng(@RequestBody Map<String,String> data)throws SQLException, ClassNotFoundException{
		Class.forName("com.mysql.cj.jdbc.Driver");
		System.out.println("数据库驱动加载成功");
		Connection conn = DriverManager.getConnection(
				"jdbc:mysql://localhost:3306/guodemo?serverTimezone=Hongkong&useUnicode=true&characterEncoding=utf8&useSSL=false",
				"root", "123456");
		list[] ans=new list[40];
//   	//插入收藏表中
   	try {
   		
   		String a=data.get("flag");
   		String b=data.get("id");
   		if(a=="0")
   		{
   		  String sql="select * from zhushi ";
   		}
   		else
   		{
   			String sql="select * from xiaoshi";
   		}
   		String sql="select * from food where username="+"'"+data+"'";
	    	Statement sta=conn.createStatement();
	    	//sta.execute(sql);
	    	ResultSet rs=sta.executeQuery(sql);
	    	int num=0;
	    	while(rs.next())
	    	{
	    		
	    		ans[num].intro=rs.getString("intro");
	    		ans[num].image=rs.getString("image");
	    		ans[num].name=rs.getString("name");
	    		ans[num].price=rs.getString("price");
	    		num++;
	    	}
	    	System.out.println(sql);
	    	System.out.println(num);
	    
			return ans;
   	}
   	catch(SQLException e){
   		conn.close();
   		System.out.print(e);
   		
   	}
   	return ans;
	}
}
