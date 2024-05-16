/* eslint-disable react-hooks/exhaustive-deps */
import {
	Box,
	Modal,
	Typography,
	Button,
	styled,
	InputBase,
	ButtonProps,
} from "@mui/material";
import { COLORS } from "../../constants";
import Add from "@mui/icons-material/Add";
import { ProcedureDto } from "../../types";
import Check from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import DeleteIcon from "../../assets/deleteIcon";
import { NumberUtils } from "../../utils/numberUtils";
import { REPLACE_ALL_PROCEDURES } from "../../services/mutations/replace-all-procedures";
import { useMutation } from "@apollo/client";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "80vw",
	maxWidth: "1041px",
	padding: "58px",
	borderRadius: "5px",
	backgroundColor: COLORS.white,
};

const InputCustomized = styled(InputBase)(() => ({
	"& .MuiInputBase-input": {
		borderRadius: 4,
		backgroundColor: COLORS.white02,
		border: `2px solid ${COLORS.green02}`,
		padding: "12px 0 12px 16px",
		fontSize: 16,
	},
}));
const CancelButton = styled(Button)<ButtonProps>(() => ({
	backgroundColor: COLORS.white,
	border: `2px solid ${COLORS.grey}`,
	color: COLORS.purple,
}));

type Props = {
	open: boolean;
	handleClose: (action?: "Create") => void;
	procedures: ProcedureDto[];
	handleRefresh: () => void;
};

export default function ProceduresModal({
	open,
	handleClose,
	handleRefresh,
	procedures: proceduresDefault,
}: Props) {
	const [replaceAllFunction] = useMutation(REPLACE_ALL_PROCEDURES);
	const [procedures, setProcedures] =
		useState<ProcedureDto[]>(proceduresDefault);

	useEffect(() => {
		if (proceduresDefault.length == 0) handleAddProcedure();
	}, [proceduresDefault.length]);

	const handleAddProcedure = () => {
		setProcedures([
			...procedures,
			{
				id: procedures.length + 1,
				process: undefined,
				code: undefined,
				reclaimed: undefined,
				difference: undefined,
				authorized: undefined,
			},
		]);
	};

	const handleRemoveProcedure = (index: number) => {
		const newProcedures = procedures.filter((_, i) => i !== index);
		setProcedures(newProcedures);
	};

	const handleChangeProcedure = (
		index: number,
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const newProcedures = procedures.map((procedure, i) => {
			if (i === index) {
				return {
					...procedure,
					[event.target.name]: event.target.value,
				};
			}
			return procedure;
		});
		setProcedures(newProcedures);
	};

	const handleSaveChanges = async () => {
		const payload = procedures.map(procedure => ({
			...procedure,
			code: Number(procedure.code),
			process: Number(procedure.process),
			reclaimed: Number(procedure.reclaimed),
			difference: Number(procedure.difference),
			authorized: Number(procedure.authorized),
		}));

		await replaceAllFunction({
			variables: { createTodoInput: payload },
		}).then(() => {
			handleRefresh();
			handleClose(
				proceduresDefault.length < payload.length ? "Create" : undefined,
			);
		});
	};

	return (
		<Modal
			keepMounted
			open={open}
			onClose={() => handleClose()}
			sx={{
				overflow: "scroll",
			}}>
			<Box sx={style}>
				<Box
					display={"flex"}
					gap={"20px"}
					margin={"0 0 0 41px"}
					height={"45px"}
					alignItems={"center"}
					flexWrap={"wrap"}>
					<Typography id='modal-modal-title' variant='h1' fontSize={"32px"}>
						Procedimientos
					</Typography>
					<Box padding={"8.26px 0 0.74px 0"}>
						<Button
							startIcon={
								<Add
									style={{
										fontSize: "25px",
										color: COLORS.green,
										stroke: COLORS.green,
									}}
								/>
							}>
							<Box onClick={handleAddProcedure}>
								<Typography
									variant='body1'
									color={COLORS.green}
									fontSize={"16px"}
									fontWeight={700}
									paddingTop={0}
									paddingBottom={0}>
									Añadir procedimiento
								</Typography>
							</Box>
						</Button>
					</Box>
				</Box>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={"32px"}
					justifyContent={"end"}
					alignItems={"end"}
					margin={"40px 0"}>
					{procedures.map((item, index) => (
						<Box
							key={item.id}
							component='form'
							noValidate
							autoComplete='off'
							maxWidth={"941px"}
							width={"100%"}
							height={"100%"}
							display={"flex"}
							gap={"24px"}
							borderRadius={"10px"}
							bgcolor={COLORS.white}
							alignItems={"center"}
							flexWrap={"wrap"}>
							<Box
								paddingTop={"50px"}
								display={"flex"}
								justifyContent={"end"}
								alignItems={"end"}
								paddingBottom={"10px"}>
								<Box
									sx={{ cursor: "pointer" }}
									onClick={() => handleRemoveProcedure(index)}>
									<DeleteIcon />
								</Box>
							</Box>
							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"7px"}
								marginRight={"24px"}
								maxWidth={"182px"}
								width={"100%"}>
								<Typography variant='body1'>
									Procedimiento {NumberUtils.getNumber(index)}
								</Typography>
								<InputCustomized
									id='outlined-basic'
									onChange={event => handleChangeProcedure(index, event)}
									name='process'
									value={item.process}
									placeholder='Ej: 4563523'
								/>
							</Box>

							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"7px"}
								maxWidth={"145px"}
								width={"100%"}>
								<Typography variant='body1'>Código</Typography>
								<InputCustomized
									sx={{
										overflow: "hidden",
										"& MuiInputBase-input": {
											border: `2px solid ${COLORS.green02}`,
											outline: "none",
										},
									}}
									id='outlined-basic'
									onChange={event => handleChangeProcedure(index, event)}
									name='code'
									value={item.code}
									placeholder='Ej: 4563523'
								/>
							</Box>

							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"7px"}
								maxWidth={"145px"}
								width={"100%"}>
								<Typography variant='body1'>Reclamado RD$</Typography>
								<InputCustomized
									id='outlined-basic'
									onChange={event => handleChangeProcedure(index, event)}
									name='reclaimed'
									value={item.reclaimed}
									placeholder='Ej: 4563523'
								/>
							</Box>

							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"7px"}
								maxWidth={"145px"}
								width={"100%"}>
								<Typography variant='body1'>Diferencia RD$</Typography>
								<InputCustomized
									id='outlined-basic'
									onChange={event => handleChangeProcedure(index, event)}
									name='difference'
									value={item.difference}
									placeholder='Ej: 4563523'
								/>
							</Box>

							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={"7px"}
								maxWidth={"145px"}
								width={"100%"}>
								<Typography variant='body1'>Autorizado RD$</Typography>
								<InputCustomized
									id='outlined-basic'
									onChange={event => handleChangeProcedure(index, event)}
									name='authorized'
									value={item.authorized}
									placeholder='Ej: 4563523'
								/>
							</Box>
						</Box>
					))}
				</Box>
				<Box display={"flex"} justifyContent={"flex-end"}>
					<Box display={"flex"} justifyContent={"center"} gap={"16.89px"}>
						<CancelButton
							onClick={() => handleClose()}
							sx={{
								border: `2px solid ${COLORS.grey}`,
								padding: "8px 39px",
								borderRadius: "5px",
							}}>
							<Typography variant='caption' fontSize={"14px"} fontWeight={700}>
								Cancelar
							</Typography>
						</CancelButton>

						<Button
							variant='contained'
							startIcon={<Check style={{ fontSize: "14px" }} />}
							color='primary'
							onClick={handleSaveChanges}>
							<Typography variant='caption' fontSize={"14px"} fontWeight={700}>
								Guardar cambios
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
		</Modal>
	);
}
