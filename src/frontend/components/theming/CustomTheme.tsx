import { CssBaseline} from "@mui/material";
import React from "react";

const CustomTheme:React.FC<{children:React.ReactNode}> = ({children}):JSX.Element => {

    return(
        <CssBaseline>
            {children}
        </CssBaseline>
    );

}

export default CustomTheme;