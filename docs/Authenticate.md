## `GET /authenticate`

API is used to validate user details and generates new JWT token

1. JWT is valid
2. user details are still valid in the database

Call this api before the JWT is expired

### INPUT - Authorization Header

### OUTPUT

1. Happy Path

```

{
"error": false,
"content": {
	"user": {
		"userId": "61779030b551652a69799dc3",
		"email": "example@gmail.com"
	},
	"token": ""
	}
}
```

Token is a valid JWT token with validity of 1h. Payload has userId and email

2. Missing Fields

```

{
	"error": true,
	"message": "\"authorization\" is required"
}

```

3. Invalid Token

```

{
	"error": true,
	"message": "Invalid Token"
}

```

3. Un Authorized - User doesnt exist

```

{
	"error": true,
	"message": "UnAuthorized"
}

```
