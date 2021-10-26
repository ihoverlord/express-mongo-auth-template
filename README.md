# express-mongo-auth-template
Email/Password based express mongodb auth reusable template module

### Installation
1. install npm modules `npm install`
2. update `MONGO_URL` at `config.js` file with MongoDB URI
3. update `PORT` at `config.js` file. By default its set to `3200` *(optional)*
4. Start the server

```
npm run start:dev // starts dev server with nodemon
npm run start:prod // starts prod server with pm2
```

### Usage

The project comes with 4 api endpoints

1. `POST /register`

2. `POST /login`

3. `GET /authenticate`

4. `POST /update-password`
