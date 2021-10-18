import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from "./Components/NavDrawer";

const Navbar:React.FC = ():JSX.Element => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const toggleNavDrawer = () => setOpenDrawer(!openDrawer);

    return(
        <AppBar position="static">
            <Toolbar>

                <IconButton 
                    color="inherit"
                    onClick={toggleNavDrawer}
                >
                    <MenuIcon/>
                </IconButton>
                <NavDrawer 
                    open={openDrawer}
                    toggleNavDrawer={toggleNavDrawer}
                />

                <Typography
                    ml={3}
                    color="inherit"
                >
                    Welcome!
                </Typography>

            </Toolbar>
        </AppBar>
    );

}

export default Navbar;