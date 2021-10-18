import React, { useContext } from "react";
import AppPageContainer from "../../components/containers/AppPageContainer";
import UserDataInfo from "./Components/UserDataInfo";
import Helmet from "react-helmet";
import { UserContext } from "../../components/context/UserContext";
import DisplayChildrenTable from "./Components/DisplayChildrenTable";

const Home:React.FC = ():JSX.Element => {
    
    const { user, isParent } = useContext(UserContext);

    return(
        <AppPageContainer>
            <Helmet>
                <title>FMC | Home</title>
            </Helmet> 
            <UserDataInfo/>
            <DisplayChildrenTable/>
        </AppPageContainer>
    );

}

export default Home;