import React, { useEffect, useState } from "react";
import AuthFormBox from "../../../components/boxes/AuthFormBox";
import Validator from "@braiandev/string-validator";
import { Button, Link, TextField, Typography } from "@mui/material";
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import axios from "axios";
import Cookies from "js-cookie";
import ROUTES from "../../../assets/ROUTES";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import { SignUpForm as Form, SignUpFormValidation, SignUpSubmitResponse } from "../../../../../types/SignUp";

const SignUpForm:React.FC = () => {

    const validate = new Validator();

    const [form, setForm] = useState<Form>({ name: "", surname: "", document: "", password: ""});
    const [validations, setValidations] = useState<SignUpFormValidation>({ name: false, surname: false, document: false, password: false});
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

        const res = await axios.post<SignUpSubmitResponse>(`/auth/sign-up`, form);

        if (res.data.error) {
            if (res.data.message) setErrorMessage(res.data.message);
        } else {
            Cookies.set("jwt", res.data.token, { expires: 1 / 24 });
            window.location.replace(ROUTES["HOME"]);
        }

    }

    useEffect(() => updateDisableSubmitStatus(), [validations]);

    return(
        <AuthFormBox>
            <Typography
                variant="h4"
                fontWeight="bold"
                color="primary.main"
                textAlign="center"
                mb={2}
            >
                Sign Up
            </Typography>
            <Typography
                mb={3}
                variant="body2"
                color="red"
                textAlign="center"
            >
                {errorMessage}
            </Typography>
            <TextField 
                fullWidth
                id="name"
                type="text"
                variant="standard"
                label="Name *"
                placeholder="John"
                helperText="Must have 3 - 32 characters."
                onChange={validateInput}
                InputProps={{ endAdornment: <AccountCircleIcon/> }}
                sx={{ marginBottom: "1rem" }}
            />
            <TextField 
                fullWidth
                id="surname"
                type="text"
                variant="standard"
                label="Surname *"
                placeholder="Doe"
                helperText="Must have 3 - 32 characters."
                onChange={validateInput}
                InputProps={{ endAdornment: <AccountCircleIcon/> }}
                sx={{ marginBottom: "1rem" }}
            />
            <TextField 
                fullWidth
                id="document"
                type="text"
                variant="standard"
                label="ID *"
                placeholder="12345678"
                helperText="Must have 8 characters and contain only numbers."
                onChange={validateInput}
                InputProps={{ endAdornment: <BadgeIcon/> }}
                sx={{ marginBottom: "1rem" }}
            />
            <TextField 
                fullWidth
                id="password"
                type="password"
                variant="standard"
                label="Password *"
                helperText="Must have 6 - 24 characters and contain numbers, lowercase and uppercase letters."
                onChange={validateInput}
                InputProps={{ endAdornment: <VpnKeyRoundedIcon/> }}
                sx={{ marginBottom: "1rem" }}
            />
            <Button
                fullWidth
                variant="contained"
                disabled={disableSubmit}
                onClick={submit}
            >
                Register
            </Button>
            <Link 
                href={ROUTES["SIGN_IN"]} 
                sx={{ textDecoration: "none" }}
            >
                <Typography
                    mt={2}
                    textAlign="center"
                >
                    Already have an account? Sign in.
                </Typography>
            </Link>
        </AuthFormBox>
    );

}

export default SignUpForm;