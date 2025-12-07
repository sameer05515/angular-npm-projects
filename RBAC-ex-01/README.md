# RBAC Example Project

A complete Role-Based Access Control (RBAC) application with Spring Boot backend and Angular frontend.

## Project Structure

```
RBAC-ex-01/
├── backend/          # Spring Boot + MongoDB + Spring Security
└── frontend/         # Angular application
```

## Backend

Spring Boot application with:
- Spring Security for authentication and authorization
- MongoDB for data persistence
- JWT token-based authentication
- RESTful API endpoints

### Setup Backend

1. Ensure MongoDB is running on `localhost:27017`
2. Navigate to `backend/` directory
3. Run: `mvn spring-boot:run`
4. Backend will start on `http://localhost:8080`

## Frontend

Angular application with:
- Authentication (Login/Register)
- Protected routes with guards
- JWT token management
- Dashboard with API testing

### Setup Frontend

1. Navigate to `frontend/` directory
2. Run: `npm install`
3. Run: `npm start` or `ng serve`
4. Frontend will start on `http://localhost:4200`

## Features

- User registration and authentication
- JWT-based authentication
- Role-based access control (USER, ADMIN)
- Protected API endpoints
- CORS configuration for frontend-backend communication

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Test Endpoints
- `GET /api/test/public` - Public endpoint (no auth required)
- `GET /api/test/user` - User endpoint (requires USER role)
- `GET /api/test/admin` - Admin endpoint (requires ADMIN role)

## Default Configuration

- Backend: `http://localhost:8080`
- Frontend: `http://localhost:4200`
- MongoDB: `localhost:27017`
- Database: `rbac_db`
