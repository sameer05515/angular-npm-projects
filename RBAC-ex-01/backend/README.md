# RBAC Backend

Spring Boot backend application with MongoDB and Spring Security for Role-Based Access Control (RBAC).

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MongoDB (running on localhost:27017)

## Setup

1. Make sure MongoDB is running on `localhost:27017`
2. Update `application.properties` if needed (database name, JWT secret, etc.)
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The application will start on `http://localhost:8080`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register new user

### Test Endpoints
- `GET /api/test/public` - Public endpoint (no authentication required)
- `GET /api/test/user` - User endpoint (requires USER role)
- `GET /api/test/admin` - Admin endpoint (requires ADMIN role)

## Security

- JWT-based authentication
- Password encryption using BCrypt
- CORS enabled for `http://localhost:4200`
