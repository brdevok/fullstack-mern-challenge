import React from "react";
import ReactDOM from "react-dom";
import CustomTheme from "./components/theming/CustomTheme";
import Routes from "./routes/Routes";

const App:React.FC = ():JSX.Element => {

    return(
        <CustomTheme>
            <Routes/>
        </CustomTheme>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"));