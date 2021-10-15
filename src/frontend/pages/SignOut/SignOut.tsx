import React from "react";
import Cookies from "js-cookie"

const SignOut:React.FC = ():JSX.Element => {

    Cookies.remove("jwt");

    window.location.reload();

    return(<></>);

} 

export default SignOut;