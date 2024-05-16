import { Box, Button, Typography } from "@mui/material";
import EmptyStateImage from "../../assets/not-empty.svg";
import EditIcon from "@mui/icons-material/Edit";
import "./index.scss";

type Props = {
	handleOpenModal: () => void;
};

export default function EmptyState({ handleOpenModal }: Props) {
	return (
		<Box className='EmptyState'>
			<Box className='EmptyState__image'>
				<img src={EmptyStateImage} />
			</Box>
			<Box className='EmptyState__text'>
				<p>No hay datos que mostrar</p>
			</Box>
			<Box className='EmptyState__button'>
				<Button
					onClick={handleOpenModal}
					variant='contained'
					startIcon={<EditIcon style={{ fontSize: "14px" }} />}
					color='primary'>
					<Typography variant='caption' fontSize={14} fontWeight={700}>
						Editar procedimientos
					</Typography>
				</Button>
			</Box>
		</Box>
	);
}
