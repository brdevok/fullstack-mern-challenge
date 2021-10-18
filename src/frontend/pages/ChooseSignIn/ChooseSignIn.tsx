import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import ChooseLogin from "./Components/ChooseLogin";
import Helmet from "react-helmet";

const ChooseSignIn:React.FC = ():JSX.Element => {

    return(
        <PageContainer>
            <Helmet>
                <title>FMC | Sign In</title>
            </Helmet> 
            <ChooseLogin/>
        </PageContainer>
    );

}

export default ChooseSignIn;