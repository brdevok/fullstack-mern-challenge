import { Box } from "@mui/system";
import React from "react";
import { UserProvider } from "../context/UserContext";
import Navbar from "../navigation/Navbar";
import PageContainer from "./PageContainer";

const AppPageContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <UserProvider>
            <Box 
                sx={{
                    width: "100%"
                }}
            >
                    <Navbar/>
                    <PageContainer>
                        {children}
                    </PageContainer>
            </Box>
        </UserProvider>
    );

}

export default AppPageContainer;