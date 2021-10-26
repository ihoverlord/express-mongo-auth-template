## `POST /login`

### INPUT

JSON body - `email`, `password`

```

{

"email": "example@gmail.com",

"password": "asdadsfdsaff"

}

```

### OUTPUT

1. Happy Path

```

{

"error": false,

"message": "Logged in Successfully!",

"token": ""

}

```

Token is a valid JWT token with validity of 1h. Payload has userId and email

2. Email Not Registered

```

{

"error": true,

"message": "Email not registered"

}

```

3. Missing Fields

```

{

"error": true,

"message": "\"FIELD\" is required"

}

```

4. Details mismatch

```

{

"error": true,

"message": "Email/Password do not match"

}

```
