import { gql } from "@apollo/client";

export const REPLACE_ALL_PROCEDURES = gql`
	mutation Mutation($createTodoInput: [CreateTodoInput!]!) {
		replaceAllProcedures(CreateTodoInput: $createTodoInput) {
			authorized
			code
			difference
			id
			process
			reclaimed
		}
	}
`;
