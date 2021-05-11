package test;

import org.springframework.web.bind.annotation.RequestMapping;

public class tes {
	@RequestMapping("/ttt")
	 public String Main() {
			return "guoxy";
		}
		public String User(int a) {
			if(a==1)
				return "yes1";
			else
				return "guoguoguo";
		}
}
