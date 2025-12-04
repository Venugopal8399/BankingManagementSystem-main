# Use Java 23 (non-LTS, for compatibility with your local JDK)
FROM eclipse-temurin:23-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the jar file into the container
COPY target/*.jar app.jar

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
