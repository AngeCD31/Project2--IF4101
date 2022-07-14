package ucr.parkingprojectspringboot.demo;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import ucr.parkingprojectspringboot.demo.ParkingProjectSpringbootApplication;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(ParkingProjectSpringbootApplication.class);
	}

}
