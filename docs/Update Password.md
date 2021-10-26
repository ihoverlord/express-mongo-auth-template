## `POST /update-password`

### INPUT

1. JSON body - oldPassword, newPassword

```

{
	"oldPassword": "oldPassword",
	"newPassword": "newPassword"
}

```

2. Authorization header with JWT

### OUTPUT

1. Happy Path

```

{
	"error": false,
	"message": "Password updated Successfully!"
}
```

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

4. Un Authorized - User doesnt exist

```

{
	"error": true,
	"message": "Email not registered"
}

```

5. Password do not match

```

{
	"error": true,
	"message": "Password do not match"
}

```
