import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import ChooseLogin from "./Components/ChooseLogin";

const ChooseSignIn:React.FC = ():JSX.Element => {

    return(
        <PageContainer>
            <ChooseLogin/>
        </PageContainer>
    );

}

export default ChooseSignIn;