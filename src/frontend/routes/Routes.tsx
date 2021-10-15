import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ROUTES from "../assets/ROUTES";
import ChooseSignIn from "../pages/ChooseSignIn/ChooseSignIn";
import SignIn from "../pages/SignIn/SignIn";
import SignOut from "../pages/SignOut/SignOut";

const Routes:React.FC = ():JSX.Element => {

    return(
        <BrowserRouter>

            <Switch>

                <Route exact path={ROUTES["HOME"]}>
                    HOME
                </Route>

                <Route exact path={ROUTES["REGISTER_CHILD"]}>
                    REGISTER CHILD
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
                    SIGN UP
                </Route>

                <Route path={ROUTES["404"]}>
                    404
                </Route>

            </Switch>

        </BrowserRouter>
    );

}

export default Routes;