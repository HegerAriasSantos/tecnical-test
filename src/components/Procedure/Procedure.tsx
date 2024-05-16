import { Box } from "@mui/material";
import { ProcedureDto } from "../../types";
import { COLORS } from "../../constants";

type Props = {
	item: ProcedureDto;
	index: string;
};
type ColumnProps = {
	label: string;
	value: string | number;
};
export default function Procedure({ item, index }: Props) {
	const columns: ColumnProps[] = [
		{
			label: `Procedimiento ${index}`,
			value: item.process,
		},
		{ label: "Código", value: item.code },
		{ label: "Reclamado", value: `RD$ ${item.reclaimed}` },
		{
			label: "Diferencia RD$",
			value: `RD$ ${item.difference}`,
		},
		{
			label: "Autorizado RD$",
			value: `RD$ ${item.authorized}`,
		},
	];
	return (
		<Box
			padding={"16px 94px 17px 34px"}
			width={"941px"}
			height={"78px"}
			display={"flex"}
			gap={"78px"}
			borderRadius={"10px"}
			bgcolor={COLORS.white}>
			{columns.map((column, index) => (
				<Box
					key={column.label + index}
					display={"flex"}
					flexDirection={"column"}
					gap={"7px"}>
					<Box fontSize={"16px"} fontWeight={400} lineHeight={"18.78px"}>
						{column.label}
					</Box>
					<Box fontSize={"14px"} fontWeight={600} lineHeight={"18.78px"}>
						{column.value}
					</Box>
				</Box>
			))}
		</Box>
	);
}
