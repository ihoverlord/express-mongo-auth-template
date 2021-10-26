## `POST /register`

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

"message": "Created Successfully!",

"token": ""

}

```

Token is a valid JWT token with validity of 1h. Payload has userId and email

2. Email Already Registered

```

{

"error": true,

"message": "Email already registered"

}

```

3. Missing Fields

```

{

"error": true,

"message": "\"FIELD\" is required"

}

```
