import React, { useEffect, useState } from "react";
import { Box, TextField, Typography, Stack, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Validator from "@braiandev/string-validator";
import axios from "axios";
import ROUTES from "../../../assets/ROUTES";
import { EditProfileForm as Form, EditProfileFormValidations, EditProfileSubmitReponse, GetEditableParentProfileData } from "../../../../../types/EditProfile";

const EditProfileForm:React.FC = ():JSX.Element => {

    const validate = new Validator({lang: "es"});

    const [form, setForm] = useState<Form>({ name: "", surname: "", document: "", password: "" });
    const [validations, setValidations] = useState<EditProfileFormValidations>({ name: false, surname: false, document: false, password: true });
    const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

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
                if (value.length === 0) {
                    result = true;
                    break;
                }
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

        const res = await axios.put<EditProfileSubmitReponse>(`/api/profile`, form);

        if (res.data.error) {
            if (res.data.message) setErrorMessage(res.data.message);
        } else {
            window.location.replace(ROUTES["HOME"]);
        }

    }

    const getProfileData = async () => {

        const res = await axios.get<GetEditableParentProfileData>(`/api/profile`);

        if (res.data.error) {
            if (res.data.message) setErrorMessage(res.data.message);
        } else {
            setForm({
                ...form,
                name: res.data.name,
                surname: res.data.surname,
                document: res.data.document,
            });
            setValidations({
                ...validations,
                name: true,
                surname: true,
                document: true,
            });
        }

    }

    const displayForm = () => {

        if (!Object.values(validations).some(value => value === false)) {
            setDataLoaded(true);
        }

    }

    useEffect(() => { getProfileData(); }, []);
    useEffect(() => updateDisableSubmitStatus(), [validations]);
    useEffect(() => { if (!dataLoaded) displayForm(); }, [form, validations]);

    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            padding: "2rem 0"
        }}>
            {
            dataLoaded
                ? <Stack sx={{ width: "100%", maxWidth: "350px" }} textAlign="center">
                    <Typography variant="h4" color="primary" mb={2}>Edit profile</Typography>
                    <Typography mb={2} variant="body2" color="red" textAlign="center">{errorMessage}</Typography>

                    <TextField
                        id="name"
                        type="text"
                        label="Name"
                        placeholder="John"
                        helperText="Must be 3 - 32 characters long."
                        variant="standard"
                        defaultValue={form.name}
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
                        defaultValue={form.surname}
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
                        defaultValue={form.document}
                        onChange={validateInput}
                        sx={{ marginBottom: "1rem" }}
                        InputProps={{ endAdornment: <BadgeIcon/> }}
                    />

                    <Typography variant="body1" color="primary" mb={1}>Update the access password (optional).</Typography>

                    <TextField
                        id="password"
                        type="password"
                        label="Password"
                        helperText="Must be 6 - 24 characters long and contain numbers, uppercase and lowercase letters."
                        variant="standard"
                        defaultValue={form.password}
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
                        Update
                    </Button>

                </Stack>
                : null
            }
        </Box>
    );

}

export default EditProfileForm;