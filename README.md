# Simplified Twitter-Like Backend System

## API Endpoints

### User Registration

- **POST /api/users/register**
- Request Body: `{ "username": "string", "password": "string",}`

### User Login

- **POST /api/users/login**
- Request Body: `{ "username": "string", "password": "string" }`
- Response: `{ "JWTtoken": "string" }`

### Post a Tweet

- **POST /api/tweets**
- Request Header: `Authorization: Bearer <token>`
- Request Body: `{ "text": "string" }`

### Fetch User Timeline Optional Query

- **GET /api/users/:userId/timeline**
- GET API : Fetch All Tweets
