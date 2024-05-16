import { Box, Button, Typography } from "@mui/material";
import { NumberUtils } from "../../utils";
import { ProcedureDto } from "../../types";
import Procedure from "../Procedure/Procedure";
import EditIcon from "@mui/icons-material/Edit";

type Props = {
	items: ProcedureDto[];
	handleOpenModal: () => void;
};
export default function Items({ items, handleOpenModal }: Props) {
	return (
		<Box className='ItemList'>
			<Box
				marginTop={"35px"}
				marginBottom={"35px"}
				display={"flex"}
				flexDirection={"column"}
				gap={"12px"}
				flexWrap={"wrap"}>
				{items.map((item, index) => (
					<Procedure
						key={item.id}
						item={item}
						index={NumberUtils.getNumber(index)}
					/>
				))}
			</Box>
			<Button
				onClick={handleOpenModal}
				variant='contained'
				startIcon={<EditIcon style={{ fontSize: "14px" }} />}
				color='primary'>
				<Typography variant='caption' fontSize={"14px"} fontWeight={700}>
					Editar procedimientos
				</Typography>
			</Button>
		</Box>
	);
}
