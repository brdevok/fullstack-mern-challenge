import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import SignUpForm from "./Components/SignUpForm";
import Helmet from "react-helmet";

const SignUp:React.FC = ():JSX.Element => {

    return(
        <PageContainer>
            <Helmet>
                <title>FMC | Sign Up</title>
            </Helmet>
            <SignUpForm/>
        </PageContainer>
    );

}

export default SignUp;