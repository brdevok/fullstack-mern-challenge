import React from "react";
import AppPageContainer from "../../components/containers/AppPageContainer";
import RegisterChildForm from "./Components/RegisterChildForm";
import Helmet from "react-helmet";

const RegisterChild:React.FC = ():JSX.Element => {

    return(
        <AppPageContainer>
            <Helmet>
                <title>FMC | Register Child</title>
            </Helmet> 
            <RegisterChildForm/>
        </AppPageContainer>
    );

}

export default RegisterChild;