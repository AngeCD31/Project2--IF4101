package ucr.parkingprojectspringboot.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
/**@SpringBootApplication(exclude ={
DataSourceAutoConfiguration.class,
DataSourceTransactionManagerAutoConfiguration.class,
HibernateJpaAutoConfiguration.class
})**/
@SpringBootApplication(scanBasePackages = { "ucr.parkingprojectspringboot.*" })
@ComponentScan({ "ucr.parkingprojectspringboot.controller","ucr.parkingprojectspringboot.repository", "ucr.parkingprojectspringboot.service" } )
@EntityScan("ucr.parkingprojectspringboot.domain")
@EnableJpaRepositories("ucr.parkingprojectspringboot.repository")

//@SpringBootApplication
public class ParkingProjectSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProjectSpringbootApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET", "POST","PUT", "DELETE");
			}
		};
	}

}
