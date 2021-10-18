import { Paper, Box } from "@mui/material";
import React from "react";

const AuthFormBox:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Box sx={{
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0"
        }}>
            <Paper 
                elevation={24}
                sx={{
                    width: "90%",
                    maxWidth: "400px",
                    height: "max-content",
                    padding: "2rem",
                    borderRadius: "1rem",
                }}
            >
                {children}
            </Paper>
        </Box>
    );

}

export default AuthFormBox;