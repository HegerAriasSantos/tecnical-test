import "./styles/app.scss";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import EmptyState from "./components/EmptyState/EmptyState";
import Items from "./components/Items/Items";
import ProceduresModal from "./components/ProceduresModal/ProceduresModal";
import { useQuery } from "@apollo/client";
import { GET_ALL_PROCEDURES } from "./services/queries/get-all-procedures";
import { ProcedureDto } from "./types";
import CreatedComponent from "./components/CreatedComponent/CreatedComponent";
import { COLORS } from "./constants";

function App() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [showCreatedComponent, setShowCreatedComponent] = useState(false);
	const { loading, data, refetch } = useQuery<{ procedures: ProcedureDto[] }>(
		GET_ALL_PROCEDURES,
	);

	const handleCloseCreatedComponent = () => setShowCreatedComponent(false);
	const handleOpenModal = () => setIsOpenModal(true);
	const handleCloseModal = (action?: "Create") => {
		setIsOpenModal(false);
		if (action) setShowCreatedComponent(true);
	};

	if (loading)
		return (
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
					backgroundColor: COLORS.white03,
				}}>
				<CircularProgress />
			</Box>
		);

	return (
		<>
			<Box className='App'>
				<Box component={"div"} className='App__title'>
					<h1>Procedimientos</h1>
				</Box>
				{data && data.procedures.length === 0 ? (
					<Box className='App__emptyContainer'>
						<EmptyState handleOpenModal={handleOpenModal} />
					</Box>
				) : (
					<Items items={data!.procedures} handleOpenModal={handleOpenModal} />
				)}
			</Box>
			<ProceduresModal
				open={isOpenModal}
				handleClose={handleCloseModal}
				procedures={data!.procedures}
				handleRefresh={refetch}
			/>
			<CreatedComponent
				show={showCreatedComponent}
				handleClose={handleCloseCreatedComponent}
			/>
		</>
	);
}

export default App;
