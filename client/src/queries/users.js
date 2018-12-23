import gql from 'graphql-tag';

export const ALL_USERS = gql`
	query {
		users {
            id,
            name,
            username
        }
	}
`;

export const SIGNUP_USER = gql`
   mutation($email: String!, $username: String!, $password: String!){
      signup(email: $email,username: $username, password: $password) {
        errors,
      }
    }
`;

export const LOGIN_USER = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user {
                id,
                email,
                username,
                name,
            },
            token
        }
    }
`;