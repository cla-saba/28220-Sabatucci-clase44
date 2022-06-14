import { buildSchema } from 'graphql';

const UserSchema = new buildSchema(`
  input modifyUsers {
    id: String,
    name: String
  }
  type User {
    id: String!,
    name: String
  }
  type Query {
    getUsers: [User],
    findUser(id: String): User
  }
  type Mutation {
    updateUser(data: modifyUsers): User,
    deleteUser: User
  }
`);

export default UserSchema;