import React from "react";
import { useParams } from "react-router";
import PageContainer from "../../components/containers/PageContainer";
import SignInForm from "./Components/SignInForm";
import Helmet from "react-helmet";

const SignIn:React.FC = ():JSX.Element => {

    const { type } = useParams() as { type:string };

    return(
        <PageContainer>
            <Helmet>
                <title>FMC | Sign In</title>
            </Helmet>    
            <SignInForm type={type}/>
        </PageContainer>
    );

}

export default SignIn;