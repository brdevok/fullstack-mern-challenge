import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ROUTES from "../assets/ROUTES";
import ChooseSignIn from "../pages/ChooseSignIn/ChooseSignIn";
import EditChild from "../pages/EditChild/EditChild";
import EditProfile from "../pages/EditProfile/EditProfile";
import Home from "../pages/Home/Home";
import RegisterChild from "../pages/RegisterChild/RegisterChild";
import SignIn from "../pages/SignIn/SignIn";
import SignOut from "../pages/SignOut/SignOut";
import SignUp from "../pages/SignUp/SignUp";

const Routes:React.FC = ():JSX.Element => {

    return(
        <BrowserRouter>

            <Switch>

                <Route exact path={ROUTES["HOME"]}>
                    <Home/>
                </Route>

                <Route path={ROUTES["EDIT_PROFILE"]}>
                    <EditProfile/>
                </Route>

                <Route path={ROUTES["REGISTER_CHILD"]}>
                    <RegisterChild/>
                </Route>

                <Route path={`${ROUTES["EDIT_CHILD"]}/:id`}>
                    <EditChild/>
                </Route>

                <Route path={ROUTES["SIGN_OUT"]}>
                    <SignOut/>
                </Route>

                <Route exact path={ROUTES["SIGN_IN"]}>
                    <ChooseSignIn/>
                </Route>

                <Route path={`${ROUTES["SIGN_IN"]}/:type`}>
                    <SignIn/>
                </Route>

                <Route path={ROUTES["SIGN_UP"]}>
                    <SignUp/>
                </Route>

                <Route path={ROUTES["404"]}>
                    404
                </Route>

            </Switch>

        </BrowserRouter>
    );

}

export default Routes;