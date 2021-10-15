import React from "react";
import { useParams } from "react-router";
import PageContainer from "../../components/containers/PageContainer";
import SignInForm from "./Components/SignInForm";

const SignIn:React.FC = ():JSX.Element => {

    const { type } = useParams() as { type:string };

    return(
        <PageContainer>
            <SignInForm type={type}/>
        </PageContainer>
    );

}

export default SignIn;