package itClub.kinni.config;

import org.junit.jupiter.api.Test;
import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseConfigTest {

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testConnection() {
        try (Connection con =
                     DriverManager.getConnection(
                             "jdbc:mysql://lucy.c0tm9svq7xyc.ap-northeast-2.rds.amazonaws.com:3306/kinni",
                             "pangmin",
                             "qorhvkd1514")) {
            System.out.println("DB Connection => " + con);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
