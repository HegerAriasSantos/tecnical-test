import { Box, Button, Slide, Typography } from "@mui/material";
import { COLORS } from "../../constants";
import { useEffect } from "react";

type Props = {
	show: boolean;
	handleClose: () => void;
};
export default function CreatedComponent({ show, handleClose }: Props) {
	useEffect(() => {
		if (show) {
			const timer = setTimeout(() => {
				handleClose();
			}, 2000);
			return () => clearTimeout(timer);
		}
	});
	return (
		<Slide direction='left' in={show} timeout={500} mountOnEnter unmountOnExit>
			<Box position={"absolute"} right={"0"} bottom={"0"}>
				<Button
					variant='contained'
					sx={{
						margin: "0 42px 42px 0",
						background: COLORS.blue,
						padding: "14px 16px",
					}}>
					<Typography
						variant='body1'
						sx={{
							color: COLORS.white,
							fontSize: "14px",
							lineHeight: "20px",
							fontWeight: 400,
						}}>
						Procedimiento agregado
					</Typography>
				</Button>
			</Box>
		</Slide>
	);
}
