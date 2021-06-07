import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUsers(keywords: String!, lastId: Int): [User]
  }
`;
