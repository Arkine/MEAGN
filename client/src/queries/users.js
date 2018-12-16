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