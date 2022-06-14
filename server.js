import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import UserSchema from './schemas/User.schema.js';
import UserController from './controller/User.controller.js';
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: UserSchema,
  rootValue: {
    getUsers: UserController.getUsers,
    findUser: UserController.findUser,
    updateUser: UserController.updateUser,
    deleteUser: UserController.deleteUser
  },
  graphiql: true
}));

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server on http://localhost:${8080}/graphql`)
});
