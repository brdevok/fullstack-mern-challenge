import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Validator from "@braiandev/string-validator";
import axios from "axios";
import ROUTES from "../../../assets/ROUTES";
import { SignUpChildSubmitResponse, SignUpForm, SignUpFormValidation } from "../../../../../types/SignUp";

const RegisterChildForm:React.FC = ():JSX.Element => {
    
    const validate = new Validator({lang: "es"});

    const [form, setForm] = useState<SignUpForm>({ name: "", surname: "", document: "", password: "" });
    const [validations, setValidations] = useState<SignUpFormValidation>({ name: false, surname: false, document: false, password: false });
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const validateInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        const id = e.target.id;
        const value = e.target.value;

        let result:boolean;

        switch(id) {
            
            case "name": case "surname":
                result = validate.str(value, { min: 3, max: 32 }, "field") as boolean;
                break;
            case "document":
                result = validate.str(value, { min: 8, max: 8 }, "num") as boolean;
                break;
            case "password":
                result = validate.str(value, { min: 6, max: 24 }, "lowpassword") as boolean;
                break;
            
            default:
                result = false;

        }

        setForm({...form, [id]: value});
        setValidations({...validations, [id]: result});

    }

    const updateDisableSubmitStatus = () => {

        if (Object.values(validations).some(validation => validation === false)) {
            if (!disableSubmit) setDisableSubmit(true);
        } else {
            if (disableSubmit) setDisableSubmit(false);
        }

    }

    const submit = async () => {

        const res = await axios.post<SignUpChildSubmitResponse>(`/api/children`, form);

        if (res.data.error) {
            if (res.data.message) setErrorMessage(res.data.message);
        } else {
            window.location.replace(ROUTES["HOME"]);
        }

    }

    useEffect(() => updateDisableSubmitStatus(), [validations]);

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem 0"
        }}>
            <Stack sx={{ width: "100%", maxWidth: "350px" }} textAlign="center">
                <Typography variant="h4" color="primary" mb={2}>Register a child</Typography>
                <Typography mb={2} variant="body2" color="red" textAlign="center">{errorMessage}</Typography>

                <TextField
                    id="name"
                    type="text"
                    label="Name"
                    placeholder="John"
                    helperText="Must be 3 - 32 characters long."
                    variant="standard"
                    onChange={validateInput}
                    sx={{ marginBottom: "1rem" }}
                    InputProps={{ endAdornment: <AccountCircleIcon/> }}
                />
                <TextField
                    id="surname"
                    type="text"
                    label="Surname"
                    placeholder="Doe"
                    helperText="Must be 3 - 32 characters long."
                    variant="standard"
                    onChange={validateInput}
                    sx={{ marginBottom: "1rem" }}
                    InputProps={{ endAdornment: <AccountCircleIcon/> }}
                />
                <TextField
                    id="document"
                    type="text"
                    label="Document ID"
                    placeholder="12345678"
                    helperText="Must be 8 characters long and contain only numbers."
                    variant="standard"
                    onChange={validateInput}
                    sx={{ marginBottom: "1rem" }}
                    InputProps={{ endAdornment: <BadgeIcon/> }}
                />

                <Typography variant="body1" color="primary" mb={1}>Create a password for children&apos;s access.</Typography>

                <TextField
                    id="password"
                    type="password"
                    label="Password"
                    helperText="Must be 6 - 24 characters long and contain numbers, uppercase and lowercase letters."
                    variant="standard"
                    onChange={validateInput}
                    sx={{ marginBottom: "2rem" }}
                    InputProps={{ endAdornment: <VpnKeyIcon/> }}
                />

                <Button
                    fullWidth
                    disabled={disableSubmit}
                    variant="contained"
                    onClick={submit}
                >
                    Register
                </Button>

            </Stack>
        </Box>
    );

}

export default RegisterChildForm;