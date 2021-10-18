import React, { useContext } from "react";
import { ChildrenTableData } from "../../../../../types/Home";
import { UserContext } from "../../../components/context/UserContext";
import ChildrenTable from "./ChildrenTable";

const DisplayChildrenTable:React.FC = ():JSX.Element => {

    const { user, isParent } = useContext(UserContext);

    return(
        <>
            {
                isParent
                ? <ChildrenTable childrenData={(user?.children as unknown) as ChildrenTableData[]}/>
                : null
            }
        </>
    )

}

export default DisplayChildrenTable;