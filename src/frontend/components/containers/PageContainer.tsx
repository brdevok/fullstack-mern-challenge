import { Container } from "@mui/material";
import React from "react";

const PageContainer:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <Container fixed>
            {children}
        </Container>
    );

}

export default PageContainer;