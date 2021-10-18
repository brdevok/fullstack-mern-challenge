import { Divider, Drawer, Link, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import LogoutIcon from '@mui/icons-material/Logout';
import ROUTES from "../../../assets/ROUTES";
import { UserContext } from "../../context/UserContext";

const NavDrawer:React.FC<{open:boolean, toggleNavDrawer:() => void}> = ({open, toggleNavDrawer}):JSX.Element => {

    const { isParent } = useContext(UserContext);
    
    return(
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleNavDrawer}
        >
            <List>

                {
                    isParent
                    ? <>
                        <Link href={ROUTES["HOME"]} sx={{ textDecoration: "none" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Home"/>
                            </ListItem>
                        </Link>

                        <Link href={ROUTES["EDIT_PROFILE"]} sx={{ textDecoration: "none" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Edit profile"/>
                            </ListItem>
                        </Link>

                        <Link href={ROUTES["REGISTER_CHILD"]} sx={{ textDecoration: "none" }}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AddReactionIcon/>
                                </ListItemIcon>
                                <ListItemText primary="Register child"/>
                            </ListItem>
                        </Link>

                        <Divider/>
                    </>
                    : null
                }

                <Link href={ROUTES["SIGN_OUT"]} sx={{ textDecoration: "none" }}>
                    <ListItem button>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Sign out"/>
                    </ListItem>
                </Link>

            </List>
        </Drawer>
    );

}

export default NavDrawer;