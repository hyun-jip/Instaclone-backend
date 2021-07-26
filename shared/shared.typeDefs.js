import { gql } from "apollo-server";

export default gql`
  scalar Upload
  type MutationResponse {
    id: Int
    ok: Boolean!
    error: String
  }
`;
