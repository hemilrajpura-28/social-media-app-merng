import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      commentCount
      likeCount
      likes {
        id
      }
      comments {
        username
      }
    }
  }
`;
