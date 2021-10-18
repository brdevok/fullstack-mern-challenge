import React from "react";
import AppPageContainer from "../../components/containers/AppPageContainer";
import EditChildForm from "./Components/EditChildForm";
import Helmet from "react-helmet";

const EditChild:React.FC = ():JSX.Element => {

    return(
        <AppPageContainer>
            <Helmet>
                <title>FMC | Edit Child</title>
            </Helmet> 
            <EditChildForm/>
        </AppPageContainer>
    );

}

export default EditChild;