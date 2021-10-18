import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from "../../../components/context/UserContext";

const UserDataInfo:React.FC = ():JSX.Element => {

    const { user, isParent } = useContext(UserContext);

    return(
        <Box sx={{ padding: "2rem 0" }} textAlign="center">
            {
                user
                ? <>
                    <AccountCircleIcon color="primary" sx={{ fontSize: "5rem" }}/>
                    <Typography variant="h2">{user.name} {user.surname}</Typography>
                    <Typography color="gray">Document ID: {user.document}</Typography>
                </>
                : null
            }
            {
                !isParent && user?.parent
                ? <>
                    <Typography variant="h6" color="primary" mt={2}>Parent:</Typography>
                    <Typography variant="h4">{user.parent.name} {user.parent.surname}</Typography>
                    <Typography color="gray">Document ID: {user.parent.document}</Typography>
                </>
                :null
            }
        </Box>
    );

}

export default UserDataInfo;