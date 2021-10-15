import React, { useEffect, useState } from "react";
import AuthFormBox from "../../../components/boxes/AuthFormBox";
import { SignInResponse, UserAuth, UserAuthValidations } from "../../../../../types/auth";
import Validator from "@braiandev/string-validator";
import { Button, Link, TextField, Typography } from "@mui/material";
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import axios from "axios";
import Cookies from "js-cookie";
import ROUTES from "../../../assets/ROUTES";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SignInForm:React.FC<{type:string}> = ({type}):JSX.Element => {

    const validate = new Validator();

    const [form, setForm] = useState<UserAuth>({ document: "", password: ""});
    const [validations, setValidations] = useState<UserAuthValidations>({ document: false, password: false});
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const validateInput = (e:React.ChangeEvent<HTMLInputElement>) => {

        const id = e.target.id;
        const value = e.target.value;

        let result:boolean;

        switch(id) {
            
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

        const res:SignInResponse = await axios.post(`/auth/${type}/sign-in`, form);

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
                variant="body2"
                fontWeight="bold"
                color="gray"
                textAlign="center"
            >
                {type === "parents" ? "Parents" : "Childrens"}
            </Typography>
            <Typography
                variant="h4"
                fontWeight="bold"
                color="primary.main"
                textAlign="center"
                mb={2}
            >
                Sign In
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
                id="document"
                type="text"
                variant="standard"
                label="ID"
                placeholder="12345678"
                onChange={validateInput}
                InputProps={{
                    endAdornment: <AssignmentIndRoundedIcon/>
                }}
                sx={{
                    marginBottom: "1rem"
                }}
            />
            <TextField
                fullWidth
                id="password"
                type="password"
                variant="standard"
                label="Password"
                onChange={validateInput}
                InputProps={{
                    endAdornment: <VpnKeyRoundedIcon/>
                }}
                sx={{
                    marginBottom: "2rem"
                }}
            />
            <Button
                fullWidth
                variant="contained"
                disabled={disableSubmit}
                onClick={submit}
            >
                Authorize Me
            </Button>
            {
                type === "parents"
                ? <Link 
                    href={ROUTES["SIGN_UP"]} 
                    sx={{
                        textDecoration: "none"
                    }}
                >
                    <Typography
                        mt={2}
                        textAlign="center"
                    >
                        Not registered? Create an account.
                    </Typography>
                </Link>
                : null
            }
            <Link
                href={ROUTES["SIGN_IN"]}
                sx={{
                    textDecoration: "none"
                }}
            >
                <Button
                    fullWidth
                    variant="outlined"
                    startIcon={<ArrowBackIcon/>}
                    sx={{
                        marginTop: "1rem"
                    }}
                >
                    Return
                </Button>
            </Link>
        </AuthFormBox>
    );

}

export default SignInForm;