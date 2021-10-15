import { Paper } from "@mui/material";
import React from "react";

const AuthFormBox:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Paper 
            elevation={24}
            sx={{
                position: "absolute",
                width: "90%",
                maxWidth: "400px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "2rem",
                borderRadius: "1rem"
            }}
        >
            {children}
        </Paper>
    );

}

export default AuthFormBox;