import { Grid, Link, Paper, SvgIcon, Typography } from "@mui/material";
import React from "react";

const ChooseLoginCard:React.FC<{icon:JSX.Element, title:string, path:string}> = ({icon, title, path}):JSX.Element => {

    return(
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
        >
            <Link 
                href={path}
                sx={{
                    textDecoration: "none"
                }}
            >
                <Paper 
                    elevation={12}
                    sx={{
                        borderRadius: "1rem",
                        padding: "2rem",
                        textAlign: "center"    
                    }}
                >
                    <SvgIcon 
                        color="primary"
                        sx={{
                            fontSize: "4rem"
                        }}
                    >{icon}</SvgIcon>
                    <Typography 
                        variant="body2" 
                        fontWeight="bold" 
                        textAlign="center"
                        color="gray"
                    >
                        Sign in for
                    </Typography>
                    <Typography 
                        variant="h3" 
                        fontWeight="light" 
                        textAlign="center"
                    >
                        {title}
                    </Typography>
                </Paper>
            </Link>
        </Grid>
    );

}

export default ChooseLoginCard;