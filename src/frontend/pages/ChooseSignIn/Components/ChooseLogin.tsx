import { Grid} from "@mui/material";
import React from "react";
import ChooseLoginCard from "./ChooseLoginCard";
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import { Box } from "@mui/system";

const ChooseLogin:React.FC = ():JSX.Element => {

    return(
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Grid container justifyContent="center" spacing={2}>
                <ChooseLoginCard
                    title="Parents"
                    icon={<SupervisedUserCircleRoundedIcon/>}
                    path="/sign-in/parents"
                />
                <ChooseLoginCard
                    title="Childrens"
                    icon={<FaceRoundedIcon/>}
                    path="/sign-in/childrens"
                />
            </Grid>
        </Box>
    );

}

export default ChooseLogin;