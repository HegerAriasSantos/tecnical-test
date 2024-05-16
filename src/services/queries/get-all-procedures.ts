import { gql } from "@apollo/client";

export const GET_ALL_PROCEDURES = gql`
	query GetAllProcedures {
		procedures {
			id
			process
			code
			reclaimed
			difference
			authorized
		}
	}
`;
