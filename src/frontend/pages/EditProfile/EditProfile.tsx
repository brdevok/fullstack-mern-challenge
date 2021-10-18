import React from "react";
import AppPageContainer from "../../components/containers/AppPageContainer";
import EditProfileForm from "./Components/EditProfileForm";
import Helmet from "react-helmet";

const EditProfile:React.FC = ():JSX.Element => {

    return(
        <AppPageContainer>
            <Helmet>
                <title>FMC | Edit Profile</title>
            </Helmet> 
            <EditProfileForm/>
        </AppPageContainer>
    );

}

export default EditProfile;