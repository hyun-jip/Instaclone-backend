import { gql } from "apollo-server";

export default gql`
  type Photo {
    id: String!
    user: User!
    file: String!
    caption: String
    hashtag: [Hashtag]
    createdAt: String!
    updatedAt: String!
  }
  type Hashtag {
    id: String!
    hashtag: String!
    photo: [Photo]
    createdAt: String!
    updatedAt: String!
  }
`;
