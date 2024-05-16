import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import {
	createTheme,
	StyledEngineProvider,
	ThemeProvider,
} from "@mui/material";
import { COLORS } from "./constants/colors.ts";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:3000/graphql",
	cache: new InMemoryCache(),
});

const theme = createTheme({
	palette: {
		primary: {
			main: COLORS.primary,
		},
		secondary: {
			main: COLORS.background,
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</StyledEngineProvider>
		</ApolloProvider>
	</React.StrictMode>,
);
