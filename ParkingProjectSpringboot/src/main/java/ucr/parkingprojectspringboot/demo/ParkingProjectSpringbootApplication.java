package ucr.parkingprojectspringboot.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;

@RestController
/**@SpringBootApplication(exclude ={
DataSourceAutoConfiguration.class,
DataSourceTransactionManagerAutoConfiguration.class,
HibernateJpaAutoConfiguration.class
})**/
@SpringBootApplication(scanBasePackages = { "ucr.parkingprojectspringboot.*" })
//@ComponentScan({ "ucr.parkingprojectspringboot.controller","ucr.parkingprojectspringboot.repository", "ucr.parkingprojectspringboot.service" } )
@EntityScan("cr.ac.ucr.apiclient.domain")
//@EnableJpaRepositories("ucr.parkingprojectspringboot.repository")

//@SpringBootApplication
public class ParkingProjectSpringbootApplication {

	public static void main(String[] args) {
		SpringApplication.run(ParkingProjectSpringbootApplication.class, args);
	}

}
